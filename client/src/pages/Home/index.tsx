import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { useQuery } from "@apollo/client";
import MovieCard from "../../components/MovieCard";
import BasicPagination from "../../components/Pagination/Index";
import { MOVIES_QUERY } from "./queries";
import { useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import { SelectedMoviesSection } from "../../components/SelectedMovies";

const MAX_PAGES = 500;

interface IGenre {
  id: number;
  name?: string;
}

export interface IMovie {
  id: number;
  posterPath?: string;
  releaseDate: string;
  title: string;
  genres?: IGenre[];
}

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });
  const { selectMovie, deleteMovie, selectedMovies } = useMovies();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Box sx={{ flexGrow: 1 }} mt={4}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
              {loading ? (
                "Loading..."
              ) : (
                <>
                  <Grid container spacing={2}>
                    {data.movies.results.map((movie: IMovie) => (
                      <Grid key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie} onCardSelect={selectMovie} />
                      </Grid>
                    ))}
                  </Grid>
                  <BasicPagination
                    totalPages={MAX_PAGES}
                    setPage={setPage}
                    page={page}
                  />
                </>
              )}
            </Box>
          </Paper>
        </Grid>
        <SelectedMoviesSection
          deleteMovie={deleteMovie}
          selectedMovies={selectedMovies}
        />
      </Grid>
    </Box>
  );
};

export default Home;
