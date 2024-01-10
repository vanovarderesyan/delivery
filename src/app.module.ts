import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AdminModule,
    CustomerModule,
    DriverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
