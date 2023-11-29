import { Module } from '@nestjs/common';
<<<<<<< HEAD
import {AdminController} from "./admin.controller";
import {AdminService} from "./admin.service";

@Module({
    controllers: [AdminController],
    providers: [AdminService],
    exports: [AdminService],
=======
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
>>>>>>> 6601b2e91ec030274c809891dd1fea50e761c21c
})
export class AdminModule {}
