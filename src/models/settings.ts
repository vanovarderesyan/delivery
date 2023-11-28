import {Table, Column, CreatedAt, Model, DataType, ForeignKey} from 'sequelize-typescript';
import { Driver } from "./driver";
import { Driver_Item } from "./driver_item";

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