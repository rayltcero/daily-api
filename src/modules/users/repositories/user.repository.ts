import { User } from "@/modules/users/models";
import { PrismaClient } from "@prisma/client";

/**
 * The user repository.
 * @class
 * @classdesc The repository for the user model.
 */
class UserRepository {
    /**
     * Creates an instance of the user repository.
     * @constructor
     * @param {PrismaClient} prisma - The Prisma client instance.
     */
    constructor(private prisma: PrismaClient) {}

    /**
     * Get a user by their ID.
     * @async
     * @param {string} id - The ID of the user to get.
     * @returns {Promise<User | null>} The user, or null if they were not found.
     */
    async getById(id: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            }
        });

        return user;
    }

    /**
     * Get a user by their username.
     * @async
     * @param {string} username - The username of the user to get.
     * @returns {Promise<User | null>} The user, or null if they were not found.
     */
    async getByUsername(username: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: {
                username
            }
        });

        return user;
    }

}

export { UserRepository };