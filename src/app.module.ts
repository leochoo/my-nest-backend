import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// decorators add functionality to class
@Module({
  imports: [],
  controllers: [AppController], // like router in express
  providers: [AppService],
})
export class AppModule {}
