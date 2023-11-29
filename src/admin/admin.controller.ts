import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AdminController {
    @Post('register')
    create(): string {
        return 'This action returns all cats';
    }

    @Get('a')
    find(): string {
        return 'aaaaaaa'
    }
}