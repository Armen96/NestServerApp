import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { LoggerMiddleware } from '../../common/middlewares/logger.middleware';
import { ValidateStudentMiddleware } from '../../common/middlewares/validate-student.middleware';
// import helmet from 'helmet';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(helmet()).forRoutes(StudentsController);
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'students', method: RequestMethod.GET });

    consumer
      .apply(ValidateStudentMiddleware)
      // .exclude({})
      .forRoutes({ path: 'students', method: RequestMethod.GET });
  }
}
