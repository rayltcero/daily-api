import { t } from 'elysia';

export const person = t.Object({
    id: t.String(),
    name: t.String({
        minLength: 3,
        maxLength: 150
    }),
    phone: t.String(),
    birthdate: t.Date(),
    createdAt: t.Date(),
    updatedAt: t.Date()
});

export type Person = typeof person.static;