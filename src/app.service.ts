import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'getHello!';
  }

  sayHello(): string {
    return 'Say Hello!';
  }
}
