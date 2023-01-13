import axios from "axios";
import { Movies } from "./movies/entities/Movies";
import { Movie } from "./movies/entities/Movie";

const API_KEY = process.env.API_KEY;
const DEFAULT_URL = process.env.DEFAULT_URL;

export const getPopular = async (page = 1) => {
  const result = await axios.get(
    `${DEFAULT_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return new Movies(result.data);
};

export const getDetails = async (movieIds: number[]) => {
  const requests = movieIds.map(async (id) =>
    axios.get(`${DEFAULT_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&`)
  );
  const data = await Promise.all(requests);
  return data.map((movie) => new Movie(movie.data));
};
