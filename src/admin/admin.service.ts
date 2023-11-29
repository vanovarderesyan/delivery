import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from "../models/admin";

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin)
        private readonly adminModel: typeof Admin,
    ) {}

    async create(data): Promise<Admin> {
        return await Admin.create(data);
    }
  }