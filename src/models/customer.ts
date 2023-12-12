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
    companies_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

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
    region: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    city: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    zip_code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false,
    })
    organization_docs: string[];

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    steps: string;

    @HasMany(() => Item)
    items: Item[];

    @BelongsToMany(() => Driver, () => Review)
    drivers: Driver[];

    @CreatedAt
    createdAt: Date;
}