import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserRole } from "../user.entity";

@ObjectType()
export class usersResponse {
    @Field(() => ID)
    id: number;

    @Field()
    readonly first_name: string;

    @Field()
    readonly last_name: string;

    @Field()
    readonly role: UserRole;

    @Field()
    readonly createdAt: string;
}

@ObjectType()
export class customResponse {
    @Field()
    message: string;
}