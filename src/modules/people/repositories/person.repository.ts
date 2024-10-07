import { Person, CreatePersonDTO } from '../models'
import { PrismaClient } from '@prisma/client'

/**
 * The people repository.
 * @class
 * @classdesc The repository for the person model.
 */
class PersonRepository {
    /**
     * Creates an instance of the people repository.
     * @constructor
     * @param {PrismaClient} prisma - The Prisma client instance.
     */
    constructor(private prisma: PrismaClient) {}

    /**
     * Create a person.
     * @async
     * @param {CreatePersonDTO} data - The data to create the person with.
     * @returns {Promise<Person>} The created person.
     */
    async create(data: CreatePersonDTO): Promise<Person> {
        const person = await this.prisma.person.create({
            data,
            select: {
                id: true,
                name: true,
                phone: true,
                birthdate: true,
                createdAt: true,
                updatedAt: true
            }
        });

        return person;
    }
}

export { PersonRepository };