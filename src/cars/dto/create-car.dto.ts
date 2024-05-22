import { IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand must be a string' })
  brand: string;
  @IsString({ message: 'Model must be a string' })
  model: string;
  @IsNumber({}, { message: 'Year must be a number' })
  year: number;
  @IsString({ message: 'Color must be a string' })
  color: string;
}
