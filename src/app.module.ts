import { Module } from '@nestjs/common';
import { EmployeeModule } from './modules/employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './modules/employee/entities/employee.entity';
import { ProjectModule } from './modules/project/project.module';
import { Project } from './modules/project/entities/project.entity';
import { StudentsModule } from './modules/students/students.module';
import { Student } from './modules/students/entities/student.entity';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    EmployeeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nest-test-employee',
      entities: [Employee, Project, Student],
      synchronize: true,
    }),
    ProjectModule,
    StudentsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
