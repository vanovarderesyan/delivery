import { Table, Column, CreatedAt, Model, DataType } from 'sequelize-typescript';

@Table
export class Company extends Model<Company> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    logo: string;

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
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.TEXT,
        unique: true,
        allowNull: false,
    })
    password: string;

    @CreatedAt
    createdAt: Date;
}