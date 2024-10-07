import { t } from 'elysia';

const createUserDTO = t.Object({
    username: t.String(),
    password: t.String(),
    personId: t.String()
});

type CreateUserDTO = typeof createUserDTO.static;

export { createUserDTO, CreateUserDTO };
