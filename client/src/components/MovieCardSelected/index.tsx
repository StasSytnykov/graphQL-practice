import {
  Button,
  Box,
  CardActions,
  Typography,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";

export interface Props {
  movie: { [key: string]: string };
  onDeleteMovie: () => void;
}

const MovieCardSelected = ({ movie, onDeleteMovie }: Props) => (
  <Card sx={{ display: "flex" }}>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="https://www.themoviedb.org/t/p/w220_and_h330_face/w2nOl7KhwcUj11YxEi9Nknj9cqu.jpg"
      alt="Live from space album cover"
    />
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          Live From Space
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
