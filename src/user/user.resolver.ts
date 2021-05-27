import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { UserInput } from './input/user.input';
import { customResponse, usersResponse } from './dto/user.dto';

@Resolver()
export class UsersResolver {
  constructor(
    private userService: UsersService,
  ) { }

  @Query(() => [usersResponse])
  async findAll() {
    return this.userService.findAll()
  }

  @Mutation(() => customResponse)
  async deleteOne(@Args('id') id: number) {
    return this.userService.deleteOne(id)
  }

  @Mutation(() => usersResponse)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.createUser(input)
  }

}
