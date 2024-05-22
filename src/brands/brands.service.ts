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
  private brands: Brand[] = [
    {
      id: '531c1602-9064-4531-9f6e-aab6b94ff48f',
      name: 'Apple',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/05/45/apple-1867461_960_720.jpg',
      description:
        'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'e63b8ea9-e21f-4827-a996-43227283f72e',
      name: 'Samsung',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/09/08/samsung-1866571_960_720.jpg',
      description:
        'Samsung Electronics Co., Ltd. is a South Korean multinational electronics company headquartered in the Yeongtong District of Suwon.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '314ae15b-8301-4445-9071-9d6f9a424770',
      name: 'Huawei',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/09/08/huawei-1866573_960_720.jpg',
      description:
        'Huawei Technologies Co., Ltd. is a Chinese multinational technology company.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

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
}
