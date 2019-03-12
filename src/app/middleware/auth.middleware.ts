import * as Koa from 'koa';

export async function authMiddleware(ctx: Koa.Context, next: () => Promise<any>) {
  const token = ctx.req.headers['x-auth-token'];
  ctx.state.user = { token, username: 'btb', firstName: 'Bob', lastName: 'TheBuilder' };
  await next();
}
