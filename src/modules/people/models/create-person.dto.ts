import { t } from 'elysia';

const createPersonDTO = t.Object({
    name: t.String({
        minLength: 3,
        maxLength: 150
    }),
    phone: t.String(),
    birthdate: t.Date()
});

type CreatePersonDTO = typeof createPersonDTO.static;

export { createPersonDTO, CreatePersonDTO };