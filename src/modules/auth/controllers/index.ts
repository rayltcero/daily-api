import { Elysia } from 'elysia';
import { register } from './register';
import { login } from './login';


const auth = new Elysia({
    prefix: '/auth',
    detail: {
        tags: ['auth'],
    }
})
.use(register)
.use(login);

export { auth };