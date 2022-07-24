import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  designation: string;

  @Field({ nullable: true })
  city: string;

  @Field()
  projectId: string;
}
