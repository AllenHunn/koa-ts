import * as Koa from 'koa';
import * as Router from 'koa-router';

import catController from './cat/cat.controller';

const routers: Router[] = [
  catController,
];

function setRoute(router: Router, app: Koa) {
  app.use(router.routes());
  app.use(router.allowedMethods());
}

export function setRoutes(app: Koa) {
  routers.forEach((router) => {
    setRoute(router, app);
  });
}
