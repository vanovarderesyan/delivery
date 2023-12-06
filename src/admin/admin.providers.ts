import { Admin } from '../models/admin';

export const adminProviders = [
    {
        provide: 'ADMIN_REPOSITORY',
        useValue: Admin,
    },
];