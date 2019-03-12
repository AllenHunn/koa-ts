import * as Koa from 'koa';
import { Cat } from './cat.entity';

export class CatAnalytics {
  static async catCreated(err: Error, cat: Cat): Promise<void> {
    console.log('sending to braze, mparticle, etc.', cat);
  }
}
