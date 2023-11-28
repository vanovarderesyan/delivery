import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from '../models/admin';
import { AdminController } from './admin.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([Admin]),
    ],
    controllers: [AdminController],
    providers: [],
    exports: [],
})
export class AdminModule {}
