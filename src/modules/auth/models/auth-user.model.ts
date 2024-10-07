import { t } from 'elysia';

const authUser = t.Object({
    id: t.String(),
    username: t.String(),
    password: t.String(),
    personId: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date()
});

type AuthUser = typeof authUser.static;

export { authUser, AuthUser };