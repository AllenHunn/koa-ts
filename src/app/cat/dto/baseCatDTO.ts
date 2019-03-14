import { Length, IsInt, Min, Max, IsIn } from 'class-validator';

export class BaseCatDTO {

  @Length(3, 10)
  name: string;

  @IsInt()
  @Min(1)
  @Max(100)
  age: number;

  @IsIn(['Orange', 'Grey', 'Tabby', 'Black', 'White'])
  color: string;
}
