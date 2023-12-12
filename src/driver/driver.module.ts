import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { driverProviders } from "./driver.providers";

@Module({
  providers: [
      DriverService,
      ...driverProviders
  ],
  controllers: [DriverController]
})
export class DriverModule {}
