import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dto';

import { CarInterface } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarsService {
  private carsRegistry: CarInterface[] = [
    {
      id: 'dd10c695-c11e-4b68-9f91-709a56d9f1fa',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2022,
      color: 'green',
    },
    {
      id: 'af0f053a-08e5-4147-8f96-86233477d26c',
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      color: 'black',
    },
    {
      id: '1da73ab3-7df1-424d-923a-46bc9f53a197',
      brand: 'Toyota',
      model: 'RAV4',
      year: 2024,
      color: 'blue',
    },
  ];

  create(createCarDto: CreateCarDto) {
    const newCar: CarInterface = {
      id: uuidv4(),
      ...createCarDto,
    };

    this.carsRegistry.push(newCar);

    return newCar;
  }

  getAllCars() {
    return { cars: this.carsRegistry };
  }

  getCarById(id: string) {
    const car = this.carsRegistry.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return { car: car };
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getCarById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);

    if (carDB) {
      this.carsRegistry = this.carsRegistry.map((car) => {
        if (car.id === id) {
          return { ...car, ...updateCarDto };
        }

        return car;
      });
    }

    carDB = this.getCarById(id);

    return { result: carDB };
  }

  removeCar(id: string) {
    const car = this.getCarById(id);

    if (!car) {
      throw new BadRequestException(`Car id is not valid`);
    }

    this.carsRegistry = this.carsRegistry.filter((car) => car.id !== id);
  }
}
