import { CreatePersonDTO } from "../models";
import { Person } from "../models";
import { PersonRepository } from "../repositories";

/**
 * The people service.
 * @class
 * @classdesc The service for the person model.
 */
class PersonService {
    /**
     * Creates an instance of the people service.
     * @constructor
     * @param {PersonRepository} repository - The people repository instance.
     */
    constructor(private repository: PersonRepository) {}

    /**
     * Create a person.
     * @async
     * @param {CreatePersonDTO} data - The data to create the person with.
     * @returns {Promise<Person>} The created person.
     */
    async create(data: CreatePersonDTO): Promise<Person> {
        const person = await this.repository.create(data);

        return person;
    }
}

export { PersonService };