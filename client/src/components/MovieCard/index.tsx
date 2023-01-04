import { useState } from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const MovieCard = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <IconButton
        aria-label="more"
        // id="long-button"
        // aria-controls={open ? "long-menu" : undefined}
        // aria-expanded={open ? "true" : undefined}
        // aria-haspopup="true"
        onClick={() => setMenuIsOpen(true)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        // id="long-menu"
        // MenuListProps={{
        //   "aria-labelledby": "long-button",
        // }}
        // anchorEl={anchorEl}
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={() => setMenuIsOpen(false)}>Test</MenuItem>
      </Menu>
      <CardMedia
        component="img"
        height="250"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/w2nOl7KhwcUj11YxEi9Nknj9cqu.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="h3">
          The Love in Your Eyes
        </Typography>
        <Typography variant="subtitle1" component="p">
          Jan 25, 2021
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
