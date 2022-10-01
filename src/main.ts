import { NestFactory } from '@nestjs/core';
// import { TestModule } from './FirstHexApp/adapters/primary/rest/test/test-app.module';
import { SpeakModule } from './FirstHexApp/adapters/primary/rest/speak-app.module';

async function bootstrap() {
  // const app = await NestFactory.create(TestModule);
  const app = await NestFactory.create(SpeakModule);
  await app.listen(3000, () => {
    console.log('Launch server on http://localhost:3000')
  });
}
bootstrap();
