import { Module } from '@nestjs/common';
import { TestController } from './testController';
import { TestService } from '../../../secondary/gateways/test.service';

@Module({
    //Modules are used by Nest to organize the application structure into scopes. Controllers and Providers are scoped by the module they are declared in. 
    imports: [],
    //Optional list of imported modules that export the providers which are required in this module
    controllers: [TestController],
    providers: [TestService],//providers that will be instantiated by the Nest injector and that may be shared at least across this module

})
export class TestModule { }