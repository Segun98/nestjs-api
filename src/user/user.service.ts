import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from './input/user.input';
import { customResponse, usersResponse } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async createUser(createUser: UserInput): Promise<usersResponse> {
        const user = await this.usersRepository.save(createUser)
        return user
    }

    async findAll(): Promise<usersResponse[]> {
        return await this.usersRepository.find({
            order: {
                createdAt: "DESC"
            }
        })
    }

    async deleteOne(id: number): Promise<customResponse> {
        await this.usersRepository.delete({
            id
        })
        return {
            message: "User successfully deleted"
        }
    }
}