import { Table, Column, CreatedAt, Model, DataType, HasMany } from 'sequelize-typescript';
import { Truck } from "./truck";
import { driverRegisterSteps } from "../enums/steps";

@Table
export class Driver extends Model<Driver> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    second_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    city: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    zip_code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.ENUM(...Object.values(driverRegisterSteps)),
        allowNull: false,
    })
    steps: driverRegisterSteps;

    @HasMany(() => Truck)
    trucks: Truck[];

    @CreatedAt
    createdAt: Date;
}