import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { ProjectService } from '../project/project.service';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>, private projectService: ProjectService) {}

  create(createEmployeeInput: CreateEmployeeInput) {
    const employee = this.employeeRepository.create(createEmployeeInput);
    return this.employeeRepository.save(employee)
  }

  findAll() {
    return this.employeeRepository.find({
      relations: ['project']
    });
  }

  findOne(id: string) {
    return this.employeeRepository.findOneBy({id: id});
  }

  update(id: string, updateEmployeeInput: UpdateEmployeeInput) {
    return this.employeeRepository.update(id, updateEmployeeInput);
  }

  remove(id: string) {
    return this.employeeRepository.delete(id);
  }

  getProject(id: string) {
    return this.projectService.findOne(id)
  }
}
