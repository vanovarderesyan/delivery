import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
  app.setGlobalPrefix('api/v1');
=======
  //app.setGlobalPrefix('api/v1');
>>>>>>> 6601b2e91ec030274c809891dd1fea50e761c21c

  await app.listen(3000);
}
bootstrap();
