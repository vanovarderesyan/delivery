import { Admin } from '../models/admin';
import { ADMIN_REPOSITORY } from "../constants";


export const adminProviders = [
    {
        provide: ADMIN_REPOSITORY,
        useValue: Admin,
    },
];