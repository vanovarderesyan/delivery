import { Injectable, Inject } from '@nestjs/common';
import { Customer } from "../models/customer";
import { CUSTOMER_REPOSITORY } from "../constants";

@Injectable()
export class CustomerService {
    constructor(
        @Inject(CUSTOMER_REPOSITORY)
        private readonly customerRepository: typeof Customer,
    ) {}

    async create(data): Promise<Customer> {
        return await this.customerRepository.create(data);
    }
}