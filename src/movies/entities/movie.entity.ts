export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
  director: string;
  reviews: {
    positive: number;
    negative: number;
  };
}
