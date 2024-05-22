import { Module } from '@nestjs/common';
import { AppController } from './app.main/app.controller';
import { AppService } from './app.main/app.service';
import { CarsModule } from './cars/cars.module';
import { SeedModule } from './seed/seed.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, SeedModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
