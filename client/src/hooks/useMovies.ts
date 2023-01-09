import { useState, useCallback } from "react";
import { IMovie } from "../pages/Home";

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);

  const selectMovie = useCallback(
    (movie: IMovie) => {
      if (selectedMovies.find((choseMovie) => choseMovie.id === movie.id)) {
        alert("This movie already added");
      } else {
        setSelectedMovies([...selectedMovies, movie]);
      }
    },
    [selectedMovies]
  );

  const deleteMovie = useCallback(
    (id: number) => {
      setSelectedMovies(
        selectedMovies.filter((choseMovie) => choseMovie.id !== id)
      );
    },
    [selectedMovies]
  );

  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
  };
};
