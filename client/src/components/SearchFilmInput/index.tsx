import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export const SearchFilmInput = () => (
  <Paper
    component="form"
    sx={{
      p: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      // position: "absolute",
    }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Movie"
      inputProps={{ "aria-label": "search movie" }}
    />
    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
);