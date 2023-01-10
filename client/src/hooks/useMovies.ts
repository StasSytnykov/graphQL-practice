import { useState, useCallback } from "react";
import { IMovie } from "../pages/Home";

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);

  const selectMovie = useCallback(
    (movie: IMovie) => {
      const isAddedMovie = selectedMovies.find(
        (choseMovie) => choseMovie.id === movie.id
      );
      const moviesQuantity = selectedMovies.length;

      if (isAddedMovie) {
        alert("This movie already added");
      } else if (moviesQuantity < 20) {
        setSelectedMovies([movie, ...selectedMovies]);
      } else {
        alert("Maximum movies is 20");
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
