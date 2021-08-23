import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'getAll';
  }

  // the function order matters. we need to place this before search to make it believe that search isn't id. If the get(":id") is at the top, other get won't work.
  @Get('search')
  search(@Query('year') movieYear: number) {
    return `searching for a movie made after ${movieYear}`;
  }

  @Get(':id') // on NestJS, if you want sth, you must ask for it.
  getOne(@Param('id') movieId: string) {
    return `Movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    // console.log(movieData);
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `Deleted the movie with the id: ${movieId}`;
  }

  @Patch(':id') // updates some parts of the resource
  patch(@Param('id') movieId: string, @Body() updateMovieData) {
    return {
      updatedMovie: movieId,
      ...updateMovieData,
    };
  }
}
