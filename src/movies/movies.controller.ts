import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  // Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  // access to the service
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // the function order matters. we need to place this before search to make it believe that search isn't id. If the get(":id") is at the top, other get won't work.

  // @Get('search')
  // search(@Query('year') movieYear: number) {
  //   return this.moviesService.search()
  // }

  @Get(':id') // on NestJS, if you want sth, you must ask for it.
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: Movie) {
    // console.log('controller', movieData);
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id') // updates some parts of the resource
  patch(@Param('id') movieId: string, @Body() updateMovieData) {
    return this.moviesService.update(movieId, updateMovieData);
  }
}
