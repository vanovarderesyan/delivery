import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { AuthService } from '../auth/auth.service';
import { DriverController } from './driver.controller';
import { driverProviders } from "./driver.providers";

@Module({
  providers: [
      DriverService,
      AuthService,
      ...driverProviders
  ],
  controllers: [DriverController]
})

export class DriverModule {}
