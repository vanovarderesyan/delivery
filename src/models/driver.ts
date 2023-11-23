import { Table, Column, CreatedAt, Model, DataType } from 'sequelize-typescript';

@Table
export class Company extends Model<Company> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    company_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    license: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    max_weight: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    substitute_driver: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    brand: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    model: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    collor: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    license_plates: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_active: boolean;

    @Column({
        type: DataType.STRING,
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