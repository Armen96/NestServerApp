import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Project } from '../project/entities/project.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee, {name: 'createEmployee'})
  createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {
    return this.employeeService.create(createEmployeeInput);
  }

  @Query(() => [Employee], { name: 'getAllEmployee' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: 'findEmployee' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.employeeService.findOne(id);
  }

  @Mutation(() => Employee, {name: 'updateEmployee'})
  updateEmployee(@Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput) {
    return this.employeeService.update(updateEmployeeInput.id, updateEmployeeInput);
  }

  @Mutation(() => Employee, {name: 'removeEmployee'})
  async removeEmployee(@Args('id', { type: () => String }) id: string) {
    await this.employeeService.remove(id);

    return { id };
  }

  @ResolveField(() => Project)
  project(@Parent() employee: Employee) {
    return this.employeeService.getProject(employee.projectId)
  }
}
