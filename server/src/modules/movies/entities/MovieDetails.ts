type TGenre = {
  id: number;
  name: string;
};

interface IMovieDetails {
  genres?: Genre[];
  id: number;
  overview?: string;
  poster_path?: string;
  release_date: string;
  title: string;
}

class Genre {
  id: number;
  name: string;
  constructor(genre: TGenre) {
    this.id = genre.id;
    this.name = genre.name;
  }
}

export class MovieDetails {
  id: number;
  overview?: string;
  posterPath?: string;
  releaseDate: string;
  title: string;
  genres?: Genre[];
  constructor(movie: IMovieDetails) {
    this.id = movie.id;
    this.title = movie.title;
    this.genres = movie.genres?.map((genre) => new Genre(genre));
    this.posterPath = movie.poster_path;
    this.releaseDate = movie.release_date;
  }
}
