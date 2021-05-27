import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
    ADMIN = "admin",
    CUSTOMER = "customer",
    OWNER = "owner"
}


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    first_name: string;

    @Column('varchar')
    last_name: string;

    @Column('varchar')
    business_name: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.CUSTOMER
    })
    role: UserRole;

    @Column({
        default: Date.now()
    })
    createdAt: string
}