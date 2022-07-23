import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  designation: string;

  @Field({ nullable: true })
  city: string;
}
