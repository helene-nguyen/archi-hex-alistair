import WordService from '../../../adapters/secondary.driven/word.service'
// import Word from './../../models/wordModel'
// import { WordRepository } from "src/smallHexagon/gateways/repositories/wordRepository";

export class MiniHexa {
    wordService = new WordService();

    // Here we want to get the word from our service that will take from a fake database
    sayHi(): string {
        return this.wordService.getWord();
    }
}