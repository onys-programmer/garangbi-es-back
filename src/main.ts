import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000; // default to 3000 if PORT is not set
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
