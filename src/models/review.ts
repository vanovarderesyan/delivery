import { Table, Column, CreatedAt, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Driver } from "./driver";
import { Customer } from "./customer";

@Table
export class Review extends Model<Review> {
    @ForeignKey(() => Driver)
    driver_id: number;

    @ForeignKey(() => Customer)
    customer_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    stars: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    comment: string;

    @CreatedAt
    createdAt: Date;
}