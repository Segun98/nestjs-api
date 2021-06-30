import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from "@nestjs/graphql";

export enum UserRole {
    ADMIN = "admin",
    CUSTOMER = "customer",
    OWNER = "owner"
}


@Entity()
@ObjectType()
export class User {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column('varchar')
    first_name: string;

    @Field()
    @Column('varchar')
    last_name: string;

    @Column('varchar')
    business_name: string;

    @Field()
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.CUSTOMER
    })
    role: UserRole;

    @Field()
    @Column({
        default: Date.now()
    })
    createdAt: string
}