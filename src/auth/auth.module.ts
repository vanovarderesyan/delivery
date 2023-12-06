import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authProviders } from "./auth.providers";

@Module({
    providers: [
        AuthService,
        ...authProviders
    ],
    exports: [AuthService],
})
export class AuthModule {}
