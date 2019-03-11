import { CreateCatDTO } from './dto/createCatDTO';
export class Cat {

  static async create(name: string, age: number, color: string) {
    const cat = new Cat();
    cat.name = name;
    cat.age = age;
    cat.color = color;
    return cat;
  }

  static async fromCreateCatDTO(createCatDTO: CreateCatDTO) {
    const cat = await this.create(createCatDTO.name, createCatDTO.age, createCatDTO.color);
    return cat;
  }

  id: number;
  name: string;
  age: number;
  color: string;
}
