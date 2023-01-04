import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 200px)",
  position: "sticky",
  top: theme.spacing(2),
}));

const Home = () => (
  <Box sx={{ flexGrow: 1 }} mt={4}>
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Paper>Filters section</Paper>
      </Grid>
      <Grid xs={12} md={8}>
        <Paper>List of Movies</Paper>
      </Grid>
      <Grid xs={12} md={4}>
        <SelectedMovies>Selected Movies</SelectedMovies>
      </Grid>
    </Grid>
  </Box>
);

export default Home;
