import { Elysia } from 'elysia';
const jsend = require('jsend');

export const JSend = new Elysia({ name: 'jsend' })
    .decorate({
        jsend
    });
