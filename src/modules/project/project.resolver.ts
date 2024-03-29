import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project, { name: 'createProject' })
  createProject(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'getAllProject' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'findProject' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project, { name: 'updateProject' })
  updateProject(@Args('updateProjectInput') updateProjectInput: UpdateProjectInput) {
    return this.projectService.update(updateProjectInput.id, updateProjectInput);
  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => String }) id: string) {
    return this.projectService.remove(id);
  }
}
