import { User } from "@/modules/users/models";
import { UserRepository } from "../repositories";

/**
 * The user service.
 * @class
 * @classdesc The service for the user model.
 */
class UserService {
    /**
     * Creates an instance of the user service.
     * @constructor
     * @param {UserRepository} userRepository - The user repository instance.
     */
    constructor(private userRepository: UserRepository) {}

    /**
     * Get a user by their ID.
     * @async
     * @param {string} id - The ID of the user to get.
     * @returns {Promise<User | null>} The user, or null if they were not found.
     */
    async getById(id: string): Promise<User | null> {
        const user = await this.userRepository.getById(id);

        return user;
    }
}