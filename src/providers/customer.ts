import { CUSTOMER_MODEl } from '../constants';
import { Customer } from "../models/customer";

export const usersProviders = [{
    provide: CUSTOMER_MODEl,
    useValue: Customer,
}];