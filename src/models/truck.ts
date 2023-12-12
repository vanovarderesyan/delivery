import { Table, Column, CreatedAt, Model, DataType, BelongsTo } from 'sequelize-typescript';
import { Driver } from "./driver";
import {TruckCondition} from "../enums/truck";

@Table
export class Truck extends Model<Truck> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    weight: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    length: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    width: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    height: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    mark: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    model: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    data: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    car_type: string;

    @Column({
        type: DataType.ENUM(...Object.values(TruckCondition)),
        allowNull: false,
    })
    car_condition: TruckCondition;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    vin_code: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    car_number: number;

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false,
    })
    cargo_insurance: string[];

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false,
    })
    car_photos: string[];

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false,
    })
    vehicle_title: string[];

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    steps: string;

    @BelongsTo(() => Driver)
    drivers: Driver;

    @CreatedAt
    createdAt: Date;
}