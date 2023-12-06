import { AuthService } from "./auth.service";

export const authProviders = [
    {
        provide: 'AUTH_REPOSITORY',
        useClass: AuthService
    },
];