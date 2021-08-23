import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // its like getRoute in express
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello')
  sayHello(): string {
    return this.appService.sayHello();
  }
}
