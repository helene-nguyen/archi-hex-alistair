import { MiniHexaThatSendingSomeWords } from './sendWord';

describe('Translator edition 2', () => {
    let word = 'Hello !! If you see the message on the web, it means that I did iiiit !!!!';
    let passphrase = "MAGIC";
    let miniHexa: MiniHexaThatSendingSomeWords

    beforeEach(() => {
        miniHexa = new MiniHexaThatSendingSomeWords();
    })

    it('should return Hello', async () => {
        expect(miniHexa.sayHi(passphrase)).toBe(word);
    });
})