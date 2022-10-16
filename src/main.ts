import { NestFactory } from '@nestjs/core';
import { WordModule } from './adapters/primary.driver/rest/wordController.module';

async function bootstrap() {
  const app = await NestFactory.create(WordModule);
  await app.listen(3001, () => {
    console.log('http://localhost:3001')
  });
}
bootstrap();
