import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// decorators add functionality to class
@Module({
  imports: [],
  controllers: [MoviesController], // like router in express
  providers: [MoviesService],
})
export class AppModule {}
