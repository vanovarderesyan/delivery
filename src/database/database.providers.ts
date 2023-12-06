import { databaseConfig } from './database.config';
import { Admin } from "../models/admin";
import { Company } from "../models/company";
import { Driver } from "../models/driver";
import { Item } from "../models/item";
import { Customer } from "../models/customer";
import { Driver_Item } from "../models/driver_item";
import { Review } from "../models/review";
import { Settings } from "../models/settings";
import { SequelizeOptionsFactory } from '@nestjs/sequelize';

export class SequelizeConfigService implements SequelizeOptionsFactory {
    createSequelizeOptions(): any {
      return {
        ...databaseConfig,
        autoLoadModels: true,
        synchronize: true,
        models: [Admin, Company, Driver, Item, Customer, Driver_Item, Review, Settings],
      };
    }
  }
