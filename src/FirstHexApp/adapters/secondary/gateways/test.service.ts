import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getAnotherHello(): string {
    return 'This is my first Nest Message';
  }
}