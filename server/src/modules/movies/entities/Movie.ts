import { IMovie, TGenre } from "./Movies";

const BASIC_POSTER_PATH = process.env.IMAGE_BASIC_PATH;

class Genre {
  id: number;
  name: string;
  constructor(genre: TGenre) {
    this.id = genre.id;
    this.name = genre.name;
  }
}

export class Movie {
  id: number;
  title: string;
  posterPath?: string;
  releaseDate: string;
  genres?: Genre[];

  constructor(movie: IMovie) {
    this.id = movie.id;
    this.title = movie.title;
    this.posterPath = `${BASIC_POSTER_PATH}${movie.poster_path}`;
    this.releaseDate = movie.release_date;
    this.genres = movie.genres?.map((genre) => new Genre(genre));
  }
}
