import { Module } from '@nestjs/common';
import { WordController } from './wordController';
import { MiniHexa } from 'src/smallHexagon/use-cases/translate/translate';


@Module({
    imports: [],
    controllers: [WordController],
    providers: [
        MiniHexa
    ]
})

export class WordModule { };