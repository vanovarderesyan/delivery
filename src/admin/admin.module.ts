import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { adminProviders } from "./admin.providers";
import { DatabaseModule } from "../database/database.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ DatabaseModule, AuthModule ],
  controllers: [ AdminController ],
  providers: [
      AdminService,
      ...adminProviders
  ]
})

export class AdminModule {}
