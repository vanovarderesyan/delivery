import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from "./customer.service";
import { AuthService } from "../auth/auth.service";
import { CustomerDto } from "../dtoS/customer";

@Controller('customer')
export class CustomerController {
    constructor(
        private customerService: CustomerService,
        private authService: AuthService,
    ) {}

    @Post('register')
    async create(@Body() customerDto: CustomerDto) {
        customerDto.password = await this.authService.hashPassword(customerDto.password);

        return await this.customerService.create(customerDto);
    }

    @Get('a')
    async get() {
        return 'aaaaaaaaaaaaaaa';
    }
}
