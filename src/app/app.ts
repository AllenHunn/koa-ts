import * as Koa from 'koa';
import * as HttpStatus from 'http-status-codes';
import * as bodyParser from 'koa-bodyparser';
import * as routes from './routes';
import { authMiddleware } from './middleware/auth.middleware';
import { wireEvents } from './events';

const app: Koa = new Koa();

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit('error', error, ctx);
  }
});

app.use(authMiddleware);

app.use(bodyParser());

routes.setRoutes(app);

wireEvents(app);

app.use(async (ctx: Koa.Context) => {
  ctx.body = 'Hello World!';
});

app.on('error', console.error);

export default app;
