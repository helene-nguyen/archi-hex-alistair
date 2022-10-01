// FIRST make the test works

//* Import test modules with Nest
import { Test, TestingModule } from '@nestjs/testing';
import { SpeakController } from '../../adapters/primary/rest/speakController';
import { GivenGreeting } from '../../adapters/secondary/gateways/givenGreeting';
import { TranslateAWord } from '../use-cases/smallHexagon';
import { TranslateRepository} from '../repositories/translateRepository'

//First test but no hexagon, everything in controller...
describe('Speak controller v1 of test', () => {
    let speakController: SpeakController;

    beforeEach(async () => { 
        const app: TestingModule = await Test.createTestingModule({
            controllers: [SpeakController],
            providers: [GivenGreeting]
        }).compile();

        speakController = app.get<SpeakController>(SpeakController);
    })

    it('should NOT return Hello', () => {
        //GIVEN
        //THEN
        //WHEN
        expect(speakController.sayHello('english')).toBe('Good morning !');
    })
});

describe('Small Hexagon want to speak', () => {

    let translate: TranslateAWord;
    let translateRepository: TranslateRepository;

    beforeEach(() => {
        translate = new TranslateAWord();
        translateRepository = new TranslateRepository()
     })

    it('should return word to translate into word translated', () => {
        //GIVEN
        //THEN
        //WHEN
        
        return testAWord('Hello !');
    })
});