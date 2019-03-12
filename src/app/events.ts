import * as Koa from 'koa';
import { CatAnalytics } from './cat/cat.analytics';

export function wireEvents(app: Koa) {
  app.addListener('catCreated', CatAnalytics.catCreated);
}
