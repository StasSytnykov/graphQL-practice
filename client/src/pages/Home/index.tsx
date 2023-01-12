import { useState } from "react";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { MOVIES_QUERY } from "./queries";
import { useMovies } from "../../hooks";
import { MovieCard } from "../../components";
import { BasicPagination } from "../../components";
import { SelectedMoviesSection } from "../../components";

const MAX_PAGES = 500;

export interface IMovie {
  id: number;
  posterPath?: string;
  releaseDate: string;
  title: string;
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
