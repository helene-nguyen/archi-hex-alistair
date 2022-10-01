import { Module } from '@nestjs/common';
import { SpeakController } from './speakController';
import { GivenGreeting } from '../../secondary/gateways/givenGreeting';

@Module({
    //Modules are used by Nest to organize the application structure into scopes. Controllers and Providers are scoped by the module they are declared in. 
    imports: [],
    //Optional list of imported modules that export the providers which are required in this module
    controllers: [SpeakController],
    providers: [GivenGreeting],//providers that will be instantiated by the Nest injector and that may be shared at least across this module
    //Providers are plain JavaScript classes that are declared as providers in a module.
})
export class SpeakModule { }