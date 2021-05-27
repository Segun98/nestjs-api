import { Field, InputType } from "@nestjs/graphql";
import { UserRole } from "../user.entity";

@InputType()
export class UserInput {

    @Field()
    readonly first_name: string;

    @Field()
    readonly last_name: string;

    @Field()
    readonly role: UserRole;
}

export class idInput {
    @Field()
    readonly id: number
}