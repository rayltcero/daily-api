import { t } from 'elysia';

const loginUserDTO = t.Object({
    username: t.String(),
    password: t.String()
});

type LoginUserDTO = typeof loginUserDTO.static;

export { loginUserDTO, LoginUserDTO };
