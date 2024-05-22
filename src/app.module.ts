import { Module } from '@nestjs/common';
import { AppController } from './app.main/app.controller';
import { AppService } from './app.main/app.service';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
