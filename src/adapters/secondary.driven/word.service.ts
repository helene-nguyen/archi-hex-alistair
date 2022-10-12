import { Injectable } from '@nestjs/common';
import { WordRepository } from '../../smallHexagon/gateways/repositories/wordRepository'
import Words from './fakeData';

@Injectable()
export default class WordService implements WordRepository {
    word: string = Words.victory;

    getWord() : string {
        return this.word;
    }
}