import { IMovie } from "./Movies";

const BASIC_POSTER_PATH = process.env.IMAGE_BASIC_PATH;

interface IGenre {
  id: number;
  name?: string;
}

export class Genres {
  id: number;
  name?: string;

  constructor(genres: IGenre) {
    this.id = genres.id;
    this.name = genres.name;
  }
}

export class Movie {
  id: number;
  title: string;
  posterPath?: string;
  releaseDate: string;
  genres?: IGenre[];

  constructor(movie: IMovie) {
    this.id = movie.id;
    this.title = movie.title;
    this.posterPath = `${BASIC_POSTER_PATH}${movie.poster_path}`;
    this.releaseDate = movie.release_date;
    this.genres = movie.genres
      ? movie.genres.map((genre) => new Genres(genre))
      : [];
  }
}
