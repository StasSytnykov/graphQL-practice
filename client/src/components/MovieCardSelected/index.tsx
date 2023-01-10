import {
  Button,
  Box,
  CardActions,
  Typography,
  CardContent,
  Card,
  CardMedia,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { MOVIEDETAILS_QUERY } from "./queries";

export interface Props {
  movieId: number;
  onDeleteMovie: (id: number) => void;
}

type Genre = {
  id: number;
  name: string;
};

const MovieCardSelected = ({ movieId, onDeleteMovie }: Props) => {
  const { loading, error, data } = useQuery(MOVIEDETAILS_QUERY, {
    variables: { id: movieId },
  });

  if (error) {
    return <div>Error</div>;
  }

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Card sx={{ display: "flex", height: 200 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, objectFit: "fill" }}
        image={data.movieDetails.posterPath}
        alt={data.movieDetails.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {data.movieDetails.title}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Typography variant={"subtitle2"} component={"h4"}>
              Genres:&nbsp;
            </Typography>
            {data.movieDetails.genres.map((genre: Genre) => (
              <Typography variant={"caption"} component={"p"}>
                {genre.name},&nbsp;
              </Typography>
            ))}
          </Box>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => onDeleteMovie(movieId)}
          >
            Delete
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default MovieCardSelected;
