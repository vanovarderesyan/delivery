import { DRIVER_MODEl } from '../constants';
import { Driver } from "../models/driver";

export const usersProviders = [{
    provide: DRIVER_MODEl,
    useValue: Driver,
}];