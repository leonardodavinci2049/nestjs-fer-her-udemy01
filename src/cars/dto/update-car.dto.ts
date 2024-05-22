import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString({ message: 'Id must be a string' })
  @IsUUID('4', { message: 'Id must be a valid UUID' })
  @IsOptional()
  readonly id: string;

  @IsOptional()
  @IsString({ message: 'Brand must be a string' })
  brand?: string;

  @IsOptional()
  @IsString({ message: 'Model must be a string' })
  @IsOptional()
  model?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Year must be a number' })
  year?: number;

  @IsOptional()
  @IsString({ message: 'Color must be a string' })
  color?: string;
}
