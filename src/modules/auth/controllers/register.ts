import { prismaClient } from '@/lib/prisma';
import { AuthRepository } from '../repositories';
import { AuthService } from '../services';
import { PersonRepository } from '@/modules/people/repositories';
import { PersonService } from '@/modules/people/services';
import { Elysia, t } from 'elysia';
import { createUserDTO } from '../models';
import { createPersonDTO } from '@/modules/people/models';
import { JSend } from '@/lib/plugins/jsend';

const authRepository = new AuthRepository(prismaClient);
const authService = new AuthService(authRepository);

const personRepository = new PersonRepository(prismaClient);
const personService = new PersonService(personRepository);

const register = new Elysia()
    .use(JSend)
    .post('/register', async ({ body, jsend }) => {
        const personDTO = {
            name: body.name,
            phone: body.phone,
            birthdate: new Date(body.birthdate)
        };
        const person = await personService.create(personDTO);

        const userDTO = {
            username: body.username,
            password: body.password,
            personId: person.id
        };
        const data = await authService.register(userDTO);

        return jsend.success(data);
    }, { body:  t.Intersect([t.Omit(createUserDTO, ['personId']), createPersonDTO])});

export { register };