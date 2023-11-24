import { Table, Column, CreatedAt, Model, DataType } from 'sequelize-typescript';

@Table
export class Driver_Item extends Model<Driver_Item> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    driver_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    item_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status: string;
    
    @CreatedAt
    createdAt: Date;
}