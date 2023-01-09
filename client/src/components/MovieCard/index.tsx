import React, { useState } from "react";
import { grey } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IMovie } from "../../pages/Home";

const MAX_TITLE_LENGTH = 16;

export interface Props {
  movie: IMovie;
  onCardSelect: (movie: IMovie) => void;
}

const MovieCard = ({ movie, onCardSelect }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const correctDate = movie.releaseDate
    .replaceAll("-", ".")
    .split(".")
    .reverse()
    .join(".");

  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <Box sx={{ position: "absolute", right: 0 }}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          sx={{ position: "absolute", left: -130 }}
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "150px",
              backgroundColor: grey[100],
              position: "relative",
              opacity: 0.9,
            },
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              onCardSelect(movie);
            }}
          >
            Select
          </MenuItem>
        </Menu>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: "100%", height: "100%", maxHeight: 330, minHeight: 330 }}
        image={movie.posterPath}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h6" component="h3">
          {movie.title.length > MAX_TITLE_LENGTH
            ? movie.title
                .slice(0, -(movie.title.length - MAX_TITLE_LENGTH))
                .concat("...")
            : movie.title}
        </Typography>
        <Typography variant="body2" component="p">
          {correctDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
