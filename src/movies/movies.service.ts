import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // we are basically going to put our fake DB here.

  private movies: Movie[] = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: 1994,
      genres: ['Drama'],
      director: 'Frank Darabont',
      reviews: {
        positive: 9.3,
        negative: 0.4,
      },
    },
    {
      id: 2,
      title: 'The Godfather',
      year: 1972,
      genres: ['Crime', 'Drama'],
      director: 'Francis Ford Coppola',
      reviews: {
        positive: 9.2,
        negative: 0.6,
      },
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      genres: ['Action', 'Crime', 'Drama'],
      director: 'Christopher Nolan',
      reviews: {
        positive: 9.0,
        negative: 0.4,
      },
    },
    {
      id: 4,
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      genres: ['Adventure', 'Drama', 'Fantasy'],
      director: 'Peter Jackson',
      reviews: {
        positive: 9.0,
        negative: 0.5,
      },
    },
    {
      id: 5,
      title: "Schindler's List",
      year: 1993,
      genres: ['Biography', 'Drama', 'History'],
      director: 'Steven Spielberg',
      reviews: {
        positive: 8.9,
        negative: 0.5,
      },
    },
    {
      id: 6,
      title: '12 Angry Men',
      year: 1957,
      genres: ['Drama'],
      director: 'Sidney Lumet',
      reviews: {
        positive: 8.9,
        negative: 0.4,
      },
    },
    {
      id: 7,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
      genres: ['Action', 'Adventure', 'Drama'],
      director: 'Peter Jackson',
      reviews: {
        positive: 8.8,
        negative: 0.5,
      },
    },
    {
      id: 8,
      title: 'Pulp Fiction',
      year: 1994,
      genres: ['Crime', 'Drama'],
      director: 'Quentin Tarantino',
      reviews: {
        positive: 8.9,
        negative: 0.5,
      },
    },
    {
      id: 9,
      title: 'The Good, the Bad and the Ugly',
      year: 1966,
      genres: ['Western'],
      director: 'Sergio Leone',
      reviews: {
        positive: 8.8,
        negative: 0.4,
      },
    },
    {
      id: 10,
      title: 'Forrest Gump',
      year: 1994,
      genres: ['Drama', 'Romance'],
      director: 'Robert Zemeckis',
      reviews: {
        positive: 8.8,
        negative: 0.4,
      },
    },
  ];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ${id} not found`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto) {
    // console.log('service', movieData);
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateMovieData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({
      ...movie,
      ...updateMovieData,
    });
  }
}
