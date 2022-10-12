import {Controller, Get} from '@nestjs/common'
import { MiniHexa } from 'src/smallHexagon/use-cases/translate/translate'

@Controller()
export class WordController {
    constructor(private readonly minihexa: MiniHexa) { }

    @Get('/word')
    sayHi() {
        return this.minihexa.sayHi();
    }
}