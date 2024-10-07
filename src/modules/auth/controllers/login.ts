import { prismaClient } from '@/lib/prisma';
import { AuthRepository } from '../repositories';
import { AuthService } from '../services';
import { Elysia, t } from 'elysia';
import { loginUserDTO } from '../models';
import { JSend } from '@/lib/plugins/jsend';

const authRepository = new AuthRepository(prismaClient);
const authService = new AuthService(authRepository);

const login = new Elysia()
    .use(JSend)
    .post('/login', async ({ body, jsend }) => {
        const data = await authService.login(body);

        return jsend.success(data);
    }, { body:  loginUserDTO });

export { login };