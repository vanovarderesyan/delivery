import {Table, Column, CreatedAt, Model, DataType, BelongsTo, ForeignKey, BelongsToMany} from 'sequelize-typescript';
import { Company } from "./company";
import { Item } from "./item";
import { Driver_Item } from "./driver_item";
import { Customer } from "./customer";
import { Review } from "./review";

@Table
export class Driver extends Model<Driver> {
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
    color: string;

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

    @ForeignKey(() => Company)
    @Column
    company_id: number;

    @BelongsTo(() => Company)
    company: Company;

    @BelongsToMany(() => Item, () => Driver_Item)
    items: Item[];

    @BelongsToMany(() => Customer, () => Review)
    customers: Customer[];

    @CreatedAt
    createdAt: Date;
}