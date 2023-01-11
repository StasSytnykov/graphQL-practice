import { Box, Typography, CardContent, Card, CardMedia } from "@mui/material";
import { useQuery } from "@apollo/client";
import { MOVIEDETAILS_QUERY } from "./queries";
import { OptionButton } from "../OptionButton/OptionButton";

export interface Props {
  movieId: number;
  onDeleteMovie: (id: number) => void;
}

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
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={data.movieDetails.posterPath}
        alt={data.movieDetails.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto", padding: 0.5 }}>
          <Typography component="div" variant="h6">
            {data.movieDetails.title}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography variant={"subtitle2"} component={"h4"}>
              Genre:&nbsp;
            </Typography>
            <Typography variant={"caption"} component={"p"}>
              {data.movieDetails.genres[0].name}
            </Typography>
          </Box>
        </CardContent>
        <OptionButton
          titleButton={"Delete"}
          onClickButton={() => onDeleteMovie(movieId)}
        />
      </Box>
    </Card>
  );
};

export default MovieCardSelected;
