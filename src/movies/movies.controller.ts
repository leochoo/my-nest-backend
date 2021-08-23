import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'getAll';
  }
  @Get('/:id') // on NestJS, if you want sth, you must ask for it.
  getOne(@Param('id') movieId: string) {
    return `Movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'create movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `Deleted the movie with the id: ${movieId}`;
  }

  @Patch('/:id') // updates some parts of the resource
  patch(@Param('id') movieId: string) {
    return `Patched the movie with the id: ${movieId}`;
  }
}
