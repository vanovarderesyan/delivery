import { Table, Column, CreatedAt, Model, DataType } from 'sequelize-typescript';

@Table
export class Admin extends Model<Admin> {
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