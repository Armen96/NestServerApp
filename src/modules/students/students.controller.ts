import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  // Req,
  // Res,
  ParseIntPipe, HttpException, HttpStatus,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
// import { Request, Response} from 'express';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get('fake')
  findFakeStudent() { // @Req() req: Request, @Res() res: Response
    // Use express req and res -> res.send(401)
    return {id: 'test', name: 'test'};
  }

  @Get('fake/:fakeId')
  findFakeStudentWithParam(@Param('fakeId', ParseIntPipe) fakeId: number) { // @Req() req: Request, @Res() res: Response
    // Use express req and res -> res.send(401)
    return {id: 'test', name: 'test', fake_id: fakeId};
  }

  @Get('error')
  errorHandler() {
    return new HttpException('Customer not Found', HttpStatus.NOT_FOUND)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
