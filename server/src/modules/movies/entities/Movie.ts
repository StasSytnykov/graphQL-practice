import { IMovie } from "./Movies";

const BASIC_POSTER_PATH = process.env.IMAGE_BASIC_PATH;

export class Movie {
  id: number;
  title: string;
  posterPath?: string;
  releaseDate: string;

  constructor(movie: IMovie) {
    this.id = movie.id;
    this.title = movie.title;
    this.posterPath = `${BASIC_POSTER_PATH}${movie.poster_path}`;
    this.releaseDate = movie.release_date;
  }
}
