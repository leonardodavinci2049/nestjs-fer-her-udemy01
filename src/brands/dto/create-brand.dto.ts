import { MinLength } from 'class-validator';

export class CreateBrandDto {
  @MinLength(3, { message: 'Name must be a string' })
  name: string;
  @MinLength(3)
  image: string;

  @MinLength(3)
  description?: string;

  createdAt?: Date;
  updatedAt?: Date;
}
