import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AdminDto } from 'src/dtoS/admin';
import { Admin } from 'src/models/admin';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminModel: typeof Admin) {}

  async create(adminDto: AdminDto) {
    return await this.adminModel.create(adminDto);
  }
}