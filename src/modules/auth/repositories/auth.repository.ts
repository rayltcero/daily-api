import type { User } from "@/modules/users/models";
import type { AuthUser } from "../models";
import { PrismaClient } from '@prisma/client';
import { CreateUserDTO, LoginUserDTO } from "../models";

class AuthRepository  {
    /**
     * Creates an instance of AuthRepository.
     * @constructor
     * @param {PrismaClient} prisma - The Prisma client instance. 
     */
    constructor(private prisma: PrismaClient) {}

    /**
     * Stores a new user in the database.
     * @async
     * @param {CreateUserDTO} user - The user to store in the database.
     * @returns {Promise<User>} The stored user.
     */
    async register(data: CreateUserDTO): Promise<User> {
        const user = await this.prisma.user.create({
            data,
            select: {
                id: true,
                username: true,
                personId: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return user;
    }

    /**
     * Logs a user in.
     * @async
     * @param {LoginUserDTO} user - The user to log in.
     * @returns {Promise<User>} The logged in user.
     */
    async login(data: LoginUserDTO): Promise<User> {
        // check if user exists
        const user = await this.prisma.user.findUnique({
            where: {
                username: data.username
            }
        });

        if (!user) {
            throw new Error('User not found');
        }

        // check if password is correct
        if (user.password !== data.password) {
            throw new Error('Invalid password');
        }

        return user;
    }

    /**
     * Get a user by their username.
     * @async
     * @param {string} username - The username of the user to get.
     * @returns {Promise<AuthUser | null>} The user, or null if they were not found.
     */
    async getByUsername(username: string): Promise<AuthUser | null> {
        const user = await this.prisma.user.findUnique({
            where: {
                username
            },
            select: {
                id: true,
                username: true,
                personId: true,
                password: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return user;
    }
}

export { AuthRepository };