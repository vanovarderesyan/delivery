import { Table, Column, CreatedAt, Model, DataType, HasMany } from 'sequelize-typescript';
import { Driver } from "./driver";

@Table
export class Company extends Model<Company> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    logo: string;

    @HasMany(() => Driver)
    drivers: Driver[];

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    company_license: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    password: string;

    @CreatedAt
    createdAt: Date;
}