import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';

//you can also export to use the model elsewhere i guess
@Module({
  providers: [UsersResolver, UsersService],
  imports: [TypeOrmModule.forFeature([User])]
})
export class UserModule { }

