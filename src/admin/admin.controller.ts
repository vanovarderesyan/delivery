import { Controller, Post, Get, Body } from '@nestjs/common';
import { AdminDto } from 'src/dtoS/admin';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from 'src/models/admin';
import { AdminService } from './admin.service';


@Controller()
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('register')
  async create(@Body() adminDto: AdminDto) {
    return await this.adminService.create(adminDto);
  }
  
  @Get('/a')
  async get() {
    return 'aaaaaaaaaaaaaaa';
  }
}