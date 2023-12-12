import { Customer } from '../models/customer';
import { CUSTOMER_REPOSITORY } from "../constants";


export const customerProviders = [
    {
        provide: CUSTOMER_REPOSITORY,
        useValue: Customer,
    },
];