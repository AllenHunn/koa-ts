import { Cat } from './cat.entity';
import { CreateCatDTO } from './dto/createCatDTO';

export class CatService {
  private readonly cats: Cat[] = [];

  constructor() {
    this.create({ name: 'Peter', age: 10, color: 'Orange' });
  }

  async create(createCatDTO: CreateCatDTO): Promise<Cat> {
    const cat = await Cat.fromCreateCatDTO(createCatDTO);
    cat.id = this.cats.length + 1;
    this.cats.push(cat);
    return cat;
  }

  async getAll(): Promise<Cat[]> {
    return await this.cats;
  }

  async get(id: number): Promise<Cat> {
    return await this.cats[id - 1];
  }
}
