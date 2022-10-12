import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { WordModule } from './adapters/primary.driver/rest/wordController.module';

async function bootstrap() {
  const app = await NestFactory.create(WordModule);
  await app.listen(3000, () => {
    console.log('http://localhost:3000')
  });
}
bootstrap();
