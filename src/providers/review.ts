import { REVIEW_MODEl } from '../constants';
import { Review } from "../models/review";

export const usersProviders = [{
    provide: REVIEW_MODEl,
    useValue: Review,
}];