import { Get, Controller } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
