import { Module } from '@nestjs/common';
import { SequelizeConfigService } from './database.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from 'src/models/admin';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useClass: SequelizeConfigService,
        }),
    ],
    providers: [],
    exports: [],
})
export class DatabaseModule { }