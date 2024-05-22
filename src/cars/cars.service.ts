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
  private carsRegistry: CarInterface[] = [];

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
  fillCarsWithSeedData(cars: CarInterface[]) {
    this.carsRegistry = cars;
  }
}
