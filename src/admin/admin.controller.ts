import { Controller, Post, Get, Body } from '@nestjs/common';
import { AdminDto } from 'src/dtoS/admin';
import { AdminService } from './admin.service';
import { AuthService } from "../auth/auth.service";

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
  
  @Get('a')
  async get() {
    return 'aaaaaaaaaaaaaaa';
  }
}