import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SerializationUser, UserInterface } from './types';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(): UserInterface[] {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':name')
  findByName(@Param('name') name: string) {
    const user = this.userService.getUserByUserName(name)

    if (user) {
      return new SerializationUser(user);
    } else {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)
    }
  }
}


