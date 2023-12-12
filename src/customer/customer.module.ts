import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { customerProviders } from "./customer.providers";
import { AuthService } from "../auth/auth.service";

@Module({
  controllers: [CustomerController],
  providers: [
      CustomerService,
      AuthService,
      ...customerProviders
  ]
})
export class CustomerModule {}
