import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { Field } from '@nestjs/graphql';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @Field()
  id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  age: number;
}
