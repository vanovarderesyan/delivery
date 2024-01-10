import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authProviders } from "./auth.providers";
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET_KEY } from '../constants';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [
        AuthService,
        ...authProviders
    ],
    exports: [AuthService],
})
export class AuthModule {}
