import { Inject, Injectable } from '@nestjs/common';
import { DRIVER_REPOSITORY } from "../constants";
import { Driver } from "../models/driver";

@Injectable()
export class DriverService {
    constructor(
        @Inject(DRIVER_REPOSITORY)
        private readonly driverRepository: typeof Driver,
    ) {}

    async create(data): Promise<Driver> {
        return await this.driverRepository.create(data);
    }
}
