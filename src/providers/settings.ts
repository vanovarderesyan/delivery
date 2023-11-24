import { SETTINGS_MODEl } from '../constants';
import { Settings } from "../models/settings";

export const usersProviders = [{
    provide: SETTINGS_MODEl,
    useValue: Settings,
}];