import { ADMIN_MODEl } from '../constants';
import { Admin } from "../models/admin";

export const usersProviders = [{
    provide: ADMIN_MODEl,
    useValue: Admin,
}];