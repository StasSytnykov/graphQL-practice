import axios from "axios";
import Movies from "./movies/entities/Movies";
import { Genres } from "./movies/entities/Movie";

const API_KEY = process.env.API_KEY;
const DEFAULT_URL = process.env.DEFAULT_URL;

export const getPopular = async () => {
  const result = await axios.get(
    `${DEFAULT_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  return new Movies(result.data);
};

export const getGenres = async (movieId: string) => {
  const result = await axios.get(
    `${DEFAULT_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return new Genres(result.data.genres);
};
