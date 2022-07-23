import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) {}

  create(createProjectInput: CreateProjectInput) {
    const project = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(project)
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: string) {
    return this.projectRepository.findOneBy({id: id});
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    return this.projectRepository.update(id, updateProjectInput)
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
