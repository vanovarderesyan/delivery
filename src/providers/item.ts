import { ITEM_MODEl } from '../constants';
import { Item } from "../models/item";

export const usersProviders = [{
    provide: ITEM_MODEl,
    useValue: Item,
}];