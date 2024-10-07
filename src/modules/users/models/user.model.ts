import { t } from 'elysia';

export const user = t.Object({
    id: t.String(),
    username: t.String(),
    personId: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date()
});

export type User = typeof user.static;