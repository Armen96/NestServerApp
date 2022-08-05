import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param, ParseIntPipe,
  // UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SerializationUser, UserInterface } from './types';
import { UserNotFoundException } from '../../common/exceptions/user-not-found.exception';
// import { HttpExceptionFilter } from '../../common/exceptions/http-exception.filter';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(): UserInterface[] {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('name/:name')
  findByName(@Param('name') name: string) {
    const user = this.userService.getUserByUserName(name)

    if (user) {
      return new SerializationUser(user);
    } else {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('id/:id')
  // @UseFilters(new HttpExceptionFilter())
  findById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUserById(id)

    if (user) {
      return new SerializationUser(user);
    } else {
      throw new UserNotFoundException();
      // throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST)
    }
  }
}


