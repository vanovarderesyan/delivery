import { Module } from '@nestjs/common';
import { SequelizeConfigService } from './database.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useClass: SequelizeConfigService,
        }),
    ],
    providers: [],
    exports: [],
})
export class DatabaseModule {}
