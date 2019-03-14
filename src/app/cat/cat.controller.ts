import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as HttpStatus from 'http-status-codes';

import { CatService } from './cat.service';

import { transformAndValidate } from 'class-transformer-validator';
import { CreateCatDTO } from './dto/createCatDTO';

const routerOpts: Router.IRouterOptions = {
  prefix: '/api/cat',
};

const router: Router = new Router(routerOpts);

const catService = new CatService();

async function getValidClass<T extends object>(classType: any, pojo: any): Promise<T> {
  return await transformAndValidate(classType, pojo) as T;
}

router.get('/', async (ctx: Koa.Context) => {
  ctx.res.setHeader('user', JSON.stringify(ctx.state.user));
  ctx.body = await catService.getAll();
});

router.get('/:cat_id', async (ctx: Koa.Context) => {
  const cat = await catService.get(ctx.params.cat_id);

  if (!cat) {
    ctx.throw(HttpStatus.NOT_FOUND);
  }

  ctx.body = cat;
});

router.post('/', async (ctx: Koa.Context) => {
  const createCatDTO = await getValidClass<CreateCatDTO>(CreateCatDTO, ctx.request.body);
  const cat = await catService.create(createCatDTO);
  ctx.body = cat;
  ctx.app.emit('catCreated', null, cat);
});

export default router;
