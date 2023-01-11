import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MovieCardSelected } from "../index";
import Grid from "@mui/material/Unstable_Grid2";
import { IMovie } from "../../pages/Home";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 200px)",
  position: "sticky",
  top: theme.spacing(2),
}));

interface Props {
  deleteMovie: (id: number) => void;
  selectedMovies: IMovie[];
}

export const SelectedMoviesSection = ({
  deleteMovie,
  selectedMovies,
}: Props) => {
  return (
    <Grid xs={12} md={4}>
      <SelectedMovies>
        <Stack
          spacing={2}
          direction="column"
          sx={{ maxHeight: "75%", overflowY: "auto" }}
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
        <Box sx={{ position: "absolute", bottom: 0 }}>Test</Box>
      </SelectedMovies>
    </Grid>
  );
};
