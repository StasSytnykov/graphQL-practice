import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IMovie } from "../../pages/Home";
import { OptionButton } from "../OptionButton/OptionButton";

export interface Props {
  movie: IMovie;
  onCardSelect: (movie: IMovie) => void;
}

export const MovieCard = ({ movie, onCardSelect }: Props) => (
  <Card sx={{ maxWidth: 250, maxHeight: 420, position: "relative" }}>
    <OptionButton
      titleButton={"Select"}
      onClickButton={() => onCardSelect(movie)}
    />

    <CardMedia
      component="img"
      sx={{ width: "100%", height: "100%", maxHeight: 330, minHeight: 330 }}
      image={movie.posterPath}
      alt={movie.title}
    />
    <CardContent>
      <Typography
        variant="h6"
        component="h3"
        sx={{ whiteSpace: "nowrap", overflow: "hidden" }}
      >
        {movie.title}
      </Typography>
      <Typography variant="body2" component="p">
        {movie.releaseDate}
      </Typography>
    </CardContent>
  </Card>
);
