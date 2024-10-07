import { CreateUserDTO, LoginUserDTO } from "../models";
import { AuthRepository } from "../repositories";
import { User } from "@/modules/users/models";
import { password } from 'bun';
import { lucia } from "@/lib/auth";

class AuthService {
    constructor(private authRepository: AuthRepository) {}

    /**
     * Stores a new user in the database.
     * @async
     * @param {CreateUserDTO} user - The user to store in the database.
     * @returns {Promise<{ user: User, session: any }>} The stored user.
     */
    async register(data: CreateUserDTO): Promise<{ user: User, session: any }> {
        const existingUser = await this.authRepository.getByUsername(data.username);

        if (existingUser) {
            throw new Error('User already exists');
        }

        const userDTO = {
            ...data,
            password: await password.hash(data.password)
        };

        const user = await this.authRepository.register(userDTO);
        const session = await lucia.createSession(user.id, {});


        return {
            user,
            session
        };
    }

    /**
     * Logs a user in.
     * @async
     * @param {LoginUserDTO} user - The user to log in.
     * @returns {Promise<{ user: User, session: any }>} The logged in user.
     */
    async login(data: LoginUserDTO): Promise<{ user: User, session: any }> {
        const user = await this.authRepository.getByUsername(data.username);

        if (!user) {
            throw new Error('User not found');
        }

        const isValid = await password.verify(data.password, user.password);
        console.log(isValid);

        if (!isValid) {
            throw new Error('Invalid password');
        }

        const userDTO: User = {
            id: user.id,
            username: user.username,
            personId: user.personId,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };

        const session = await lucia.createSession(user.id, {});

        return {
            user: userDTO,
            session
        };
    }
}

export { AuthService };
