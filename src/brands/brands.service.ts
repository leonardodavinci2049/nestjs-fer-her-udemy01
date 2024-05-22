import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    if (!createBrandDto.image) {
      throw new Error('Image is required');
    }
    if (!createBrandDto.description) {
      throw new Error('Description is required');
    }
    const newBrand = {
      id: uuidv4(),
      ...createBrandDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.brands.push(newBrand);
    return { Brand: newBrand };
  }

  findAll() {
    return { Brand: this.brands };
  }

  findOne(id: string) {
    const brand = this.brands.find((car) => car.id === id);

    if (!brand) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return { Brand: brand };
  }
  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    if (brandDB) {
      this.brands = this.brands.map((car) => {
        if (car.id === id) {
          return { ...car, ...updateBrandDto };
        }

        return car;
      });
    }

    brandDB = this.findOne(id);

    return { result: brandDB };
  }
  remove(id: string) {
    const brand = this.findOne(id);

    if (!brand) {
      throw new BadRequestException(`Brand id is not valid`);
    }
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
