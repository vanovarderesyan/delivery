import {Table, Column, CreatedAt, Model, DataType, ForeignKey, BelongsTo, BelongsToMany} from 'sequelize-typescript';
import { Customer } from "./customer";
import { Driver_Item } from "./driver_item";
import { Driver } from "./driver";

@Table
export class Item extends Model<Item> {
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

    @ForeignKey(() => Customer)
    @Column
    customer_id: number;

    @BelongsTo(() => Customer)
    customer: Customer;

    @BelongsToMany(() => Driver, () => Driver_Item)
    drivers: Driver[];

    @CreatedAt
    createdAt: Date;
}