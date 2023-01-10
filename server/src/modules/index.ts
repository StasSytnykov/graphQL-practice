import axios from "axios";
import { Movies } from "./movies/entities/Movies";
import { MovieDetails } from "./movies/entities/MovieDetails";

const API_KEY = process.env.API_KEY;
const DEFAULT_URL = process.env.DEFAULT_URL;

export const getPopular = async (page = 1) => {
  const result = await axios.get(
    `${DEFAULT_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return new Movies(result.data);
};

export const getDetails = async (movieId: number) => {
  const result = await axios.get(
    `${DEFAULT_URL}/movie/297761?api_key=${API_KEY}&language=en-US&`
  );

  return new MovieDetails(result.data);
};
