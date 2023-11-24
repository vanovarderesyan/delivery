import { Table, Column, CreatedAt, Model, DataType } from 'sequelize-typescript';

@Table
export class Item extends Model<Item> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    customer_id: number;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    count: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    weight: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    height: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    product_type: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    pick_up_address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    pick_down_address: string;

    @CreatedAt
    createdAt: Date;
}