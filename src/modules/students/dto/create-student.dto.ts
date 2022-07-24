import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentDto {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  age: number;
}
