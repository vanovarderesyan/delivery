import { Table, Column, CreatedAt, Model, DataType } from 'sequelize-typescript';

@Table
export class Review extends Model<Review> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    driver_id: number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
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