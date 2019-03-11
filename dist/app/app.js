"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const HttpStatus = require("http-status-codes");
const app = new Koa();
app.use(async (ctx, next) => {
    try {
        await next();
    }
    catch (error) {
        ctx.status = error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
        error.status = ctx.status;
        ctx.body = { error };
        ctx.app.emit('error', error, ctx);
    }
});
app.use(async (ctx) => {
    ctx.body = 'Hello World!';
});
app.on('error', console.error);
exports.default = app;
