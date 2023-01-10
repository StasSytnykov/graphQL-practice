import { Movie } from "./Movie";

export interface IMovie {
  id: number;
  poster_path?: string;
  release_date: string;
  title: string;
}

export interface IMovies {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMovie[];
}

export class Movies {
  page: number;
  totalResults: number;
  totalPages: number;
  results: Movie[];

  constructor(movies: IMovies) {
    this.page = movies.page;
    this.totalResults = movies.total_results;
    this.totalPages = movies.total_pages;
    this.results = movies.results.map((movie) => new Movie(movie));
  }
}
