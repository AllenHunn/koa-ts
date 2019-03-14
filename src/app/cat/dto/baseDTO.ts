import { transformAndValidate } from 'class-transformer-validator';

export type StaticThis<T> = { new(): T };

export class BaseDTO {
  static async createValidDTO<T extends BaseDTO>(this: StaticThis<T>, pojo: Object) {
    return await transformAndValidate(this, pojo);
  }
}
