import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Admin } from "../models/admin";
import { Company } from "../models/company";
import { Driver } from "../models/driver";
import { Item } from "../models/item";
import { Customer } from "../models/customer";
import { Driver_Item } from "../models/driver_item";
import { Review } from "../models/review";
import { Settings } from "../models/settings";


export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
            case DEVELOPMENT:
                config = databaseConfig.development;
                break;
            case PRODUCTION:
                config = databaseConfig.production;
                break;
            default:
                config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        // add models here
        sequelize.addModels([Admin, Company, Driver, Item, Customer, Driver_Item, Review, Settings]);
        await sequelize.sync();
        return sequelize;
    },
}];