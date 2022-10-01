//test needs to be in the same file with Nest
import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './testController';
import { TestService } from '../../../secondary/gateways/test.service';

describe('AppController', () => {
    let testController: TestController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [TestController],
            providers: [TestService],
        }).compile();

        testController = app.get<TestController>(TestController);
    });

    describe('/test/route', () => {
        it('should return "This is my first Nest Message"', () => {
            expect(testController.getAnotherHello()).toBe('This is my first Nest Message');
        });
    });
});
