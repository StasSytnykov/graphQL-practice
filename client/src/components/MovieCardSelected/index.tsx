import {
  Button,
  Box,
  CardActions,
  Typography,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";
import { IMovie } from "../../pages/Home";

export interface Props {
  movie: IMovie;
  onDeleteMovie: () => void;
}

const MovieCardSelected = ({ movie, onDeleteMovie }: Props) => (
  <Card sx={{ display: "flex" }}>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={movie.posterPath}
      alt={movie.title}
    />
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          {movie.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Mac Miller
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Box>
  </Card>
);

export default MovieCardSelected;
