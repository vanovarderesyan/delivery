import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { AdminDto } from 'src/dtoS/admin';
import { AdminService } from './admin.service';
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from '../auth/auth.guard';

@Controller('auth')
export class AdminController {
  constructor(
      private adminService: AdminService,
      private authService: AuthService,
  ) {}

  @Post('register')
  async create(@Body() adminDto: AdminDto) {
    let { password} = adminDto;
    adminDto.password = await this.authService.hashPassword(password);

    return await this.adminService.create(adminDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}