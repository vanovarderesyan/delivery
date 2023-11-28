import {Table, Column, CreatedAt, Model, DataType, BelongsToMany, ForeignKey} from 'sequelize-typescript';
import { Driver } from "./driver";
import { Item } from "./item";

@Table
export class Driver_Item extends Model<Driver_Item> {
    @ForeignKey(() => Driver)
    driver_id: number;

    @ForeignKey(() => Item)
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