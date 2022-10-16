import {Controller, Get, Post, Body} from '@nestjs/common'
import { MiniHexaThatSendingSomeWords } from 'src/smallHexagon/use-cases/sendSomeWords/sendWord'

interface PassphraseParams {
    passphrase: string;
}

@Controller()
export class WordController {
    constructor(private readonly minihexa: MiniHexaThatSendingSomeWords) { }

    @Post('/words')
    sayHi(@Body() myBody: PassphraseParams) {

        return this.minihexa.sayHi(myBody.passphrase);
    }
}