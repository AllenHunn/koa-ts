import { Length, IsInt, Min, Max, IsIn } from 'class-validator';
import { BaseDTO } from './baseDTO';

export class BaseCatDTO extends BaseDTO {
  @Length(3, 10)
  name: string;

  @IsInt()
  @Min(1)
  @Max(100)
  age: number;

  @IsIn(['Orange', 'Grey', 'Tabby', 'Black', 'White'])
  color: string;
}
