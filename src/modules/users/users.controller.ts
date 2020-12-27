import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.userService.findOne(params.id);
  }

  @Post()
  create(@Body() user) {
    return this.userService.create(user);
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.userService.remove(params.id);
  }
}
