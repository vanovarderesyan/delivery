import { Table, Column, CreatedAt, Model, DataType } from 'sequelize-typescript';

@Table
export class Settings extends Model<Settings> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    gas_price: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    min_price: string;

    @CreatedAt
    createdAt: Date;
}