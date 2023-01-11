import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import MovieCard from "../../components/MovieCard";
import BasicPagination from "../../components/Pagination/Index";
import { MOVIES_QUERY } from "./queries";
import { useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import { MovieCardSelected } from "../../components";

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

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 200px)",
  position: "sticky",
  top: theme.spacing(2),
}));

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

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
        <Grid xs={12} md={4}>
          <SelectedMovies>
            <Stack
              spacing={2}
              direction="column"
              sx={{ maxHeight: "75%", overflowY: "auto" }}
            >
              {selectedMovies.map((movie: IMovie) => (
                <Box>
                  <MovieCardSelected
                    key={movie.id}
                    movieId={movie.id}
                    onDeleteMovie={deleteMovie}
                  />
                </Box>
              ))}
            </Stack>
            <Box sx={{ position: "absolute", bottom: 0 }}>Test</Box>
          </SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
