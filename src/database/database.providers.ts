import { databaseConfig } from './database.config';
import { Admin } from "../models/admin";
import { Company } from "../models/company";
import { Driver } from "../models/driver";
import { Item } from "../models/item";
import { Customer } from "../models/customer";
import { Driver_Item } from "../models/driver_item";
import { Review } from "../models/review";
import { Settings } from "../models/settings";
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';

export class SequelizeConfigService implements SequelizeOptionsFactory {
    createSequelizeOptions(): SequelizeModuleOptions {
      return {
        ...databaseConfig,
        autoLoadModels: true,
        synchronize: true, // set to true only in development to auto-create tables
        models: [Admin, Company, Driver, Item, Customer, Driver_Item, Review, Settings], // Specify your Sequelize model(s) here
      };
    }
  }
