import {Table, Column, CreatedAt, Model, DataType, HasMany, BelongsToMany} from 'sequelize-typescript';
import { Item } from "./item";
import { Review } from "./review";
import { Driver } from "./driver";

@Table
export class Customer extends Model<Customer> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    passport_image: string;

    @HasMany(() => Item)
    items: Item[];

    @BelongsToMany(() => Driver, () => Review)
    drivers: Driver[];

    @CreatedAt
    createdAt: Date;
}