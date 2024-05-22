import { IsOptional, MinLength } from 'class-validator';

export class UpdateBrandDto {
  @IsOptional()
  @MinLength(3, { message: 'Name must be a string' })
  name: string;

  @IsOptional()
  @MinLength(3)
  description?: string;
}
