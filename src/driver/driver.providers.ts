import { Driver } from '../models/driver';
import { DRIVER_REPOSITORY } from "../constants";

export const driverProviders = [
    {
        provide: DRIVER_REPOSITORY,
        useValue: Driver,
    },
];