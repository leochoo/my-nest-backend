import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// decorators add functionality to class
@Module({
  imports: [MoviesModule],
  controllers: [AppController], // like router in express
  providers: [],
})
export class AppModule {}
