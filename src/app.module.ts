import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// decorators add functionality to class
@Module({
  imports: [],
  controllers: [MoviesController], // like router in express
  providers: [],
})
export class AppModule {}
