import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MovieCardSelected } from "../index";
import Grid from "@mui/material/Unstable_Grid2";
import { IMovie } from "../../pages/Home";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { SearchFilmInput } from "../SearchFilmInput";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 200px)",
  position: "sticky",
  top: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

interface Props {
  deleteMovie: (id: number) => void;
  selectedMovies: IMovie[];
}

export const SelectedMoviesSection = ({
  deleteMovie,
  selectedMovies,
}: Props) => (
  <Grid xs={12} md={4}>
    <SelectedMovies>
      <Stack
        spacing={2}
        direction="column"
        sx={{ maxHeight: "88%", overflowY: "auto", marginBottom: 1 }}
      >
        {selectedMovies.map((movie: IMovie) => (
          <Box key={movie.id}>
            <MovieCardSelected
              movieId={movie.id}
              onDeleteMovie={() => deleteMovie(movie.id)}
            />
          </Box>
        ))}
      </Stack>
      <SearchFilmInput />
    </SelectedMovies>
  </Grid>
);
