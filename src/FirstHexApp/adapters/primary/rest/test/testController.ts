// This file is just a testing fil because use Nest for the first time
// #Yumicode 2022
import { Controller, Get } from '@nestjs/common';
import { TestService } from '../../../secondary/gateways/test.service';

@Controller('test')
//Nest: declare the controller and in you can add the first name URL path
//It defines a class that provides the context for one or more related route handlers that correspond to HTTP request methods and associated routes for example
export class TestController {
    constructor(private readonly testService: TestService) { } // get what will be driven by this controller

    @Get('route')
    getAnotherHello() {
        return this.testService.getAnotherHello();
    }

}

//review the test is red, it's normal, did'nt defined any test in smallHexa