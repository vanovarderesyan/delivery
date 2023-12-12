import { Injectable, Inject } from '@nestjs/common';
import { Admin } from "../models/admin";
import { ADMIN_REPOSITORY } from "../constants";

@Injectable()
export class AdminService {
    constructor(
        @Inject(ADMIN_REPOSITORY)
        private readonly adminRepository: typeof Admin,
    ) {}

    async create(data): Promise<Admin> {
        return await this.adminRepository.create(data);
    }
}