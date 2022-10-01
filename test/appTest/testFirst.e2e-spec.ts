import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TestModule } from '../../src/FirstHexApp/adapters/primary/rest/test/test-app.module';

describe('TestController first implémentation', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [TestModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/test/route (GET)', () => {
        return request(app.getHttpServer())
            .get('/test/route')
            .expect(200)
            .expect('This is my first Nest Message');
    });
});
