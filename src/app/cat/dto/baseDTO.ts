import { transformAndValidate } from 'class-transformer-validator';

export type StaticThis<T> = { new(): T };

export abstract class BaseDTO {
  static async createValidDTO<T extends BaseDTO>(this: StaticThis<T>, pojo: Object): Promise<T> {
    return await transformAndValidate(this, pojo);
  }
}
