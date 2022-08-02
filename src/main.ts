import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global middlewares
  // Helmet - secure http headers
  app.use(helmet())

  await app.listen(3000);
}
bootstrap();
