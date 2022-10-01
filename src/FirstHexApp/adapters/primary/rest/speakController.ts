import { Controller, Get } from '@nestjs/common'
import { GivenGreeting } from '../../secondary/gateways/givenGreeting'

@Controller()
export class SpeakController {
    constructor(private readonly givenGreeting: GivenGreeting) { }
    
    @Get()
    sayHello(language : string) {
        return this.givenGreeting.sayHello(language);
    }
}