import { DRIVER_ITEM_MODEl } from '../constants';
import { Driver_Item } from "../models/driver_item";

export const usersProviders = [{
    provide: DRIVER_ITEM_MODEl,
    useValue: Driver_Item,
}];