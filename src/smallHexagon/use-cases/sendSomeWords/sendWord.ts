import WordService from '../../../adapters/secondary.driven/word.service'
import { WordModel } from './../../models/wordModel'

export class MiniHexaThatSendingSomeWords {
    wordService = new WordService();
    wordModel: WordModel;

    // Here we want to get the word from our service that will take from a fake database
    sayHi(passphrase: string): string {
        let isChecked: boolean = new WordModel(passphrase).checkedPassphrase;

        if (isChecked) return this.wordService.getWord()
        else return "BAD PASSPHRASE";
    }
}
