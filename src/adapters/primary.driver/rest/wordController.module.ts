import { Module } from '@nestjs/common';
import { WordController } from './wordController';
import { MiniHexaThatSendingSomeWords } from 'src/smallHexagon/use-cases/sendSomeWords/sendWord';


@Module({
    imports: [],
    controllers: [WordController],
    providers: [
        MiniHexaThatSendingSomeWords
    ]
})

export class WordModule { };