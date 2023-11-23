import { COMPANY_MODEl } from '../constants';
import { Company } from "../models/company";

export const usersProviders = [{
    provide: COMPANY_MODEl,
    useValue: Company,
}];