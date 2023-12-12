import { AuthService } from "./auth.service";
import { AUTH_REPOSITORY } from "../constants";
export const authProviders = [
    {
        provide: AUTH_REPOSITORY,
        useClass: AuthService
    },
];