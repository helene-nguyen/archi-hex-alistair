import { MiniHexa } from './translate';

describe('Translator edition 2', () => {
    it('should return Hello', async () => {
        let word = 'Hello !! If you see the message on the web, it means that I did iiiit !!!!';

        expect(new MiniHexa().sayHi()).toBe(word);
    });
}

)