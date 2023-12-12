import { Body, Controller, Get, Post } from '@nestjs/common';
import { DriverService } from "./driver.service";
import { AuthService } from "../auth/auth.service";
import { DriverDto } from "../dtoS/driver";

@Controller('driver')
export class DriverController {
    constructor(
        private driverService: DriverService,
        private authService: AuthService,
    ) {}

    @Post('register')
    async create(@Body() driverDto: DriverDto) {
        driverDto.password = await this.authService.hashPassword(driverDto.password);

        return await this.driverService.create(driverDto);
    }

    @Get('a')
    async get() {
        return 'aaaaaaaaaaaaaaa';
    }
}
