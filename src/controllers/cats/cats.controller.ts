import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreateCatDto } from '../../interfaces/create-cat.dto';
import { CatInterface } from '../../interfaces/cat.interface';
import { CatsService } from '../../services/cats/cats.service';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {}

  @Get('')
  findAll(): CatInterface[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): CatInterface {
    return this.catsService.findAll().find(cat => cat.id == params.id);
  }

  @Get('express')
  findAllExpress(@Res() response) {
    response.status(200).send('hello world!!!');
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): CatInterface {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

}
