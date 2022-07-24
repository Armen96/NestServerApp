import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { LoggerMiddleware } from '../../common/middlewares/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'students', method: RequestMethod.GET });
  }
}
