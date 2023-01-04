import { CssBaseline, Container, Box } from "@mui/material";
import { Navigation } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />

      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          height: "calc(100vh - 68.5px)",
          overflow: "auto",
        }}
      >
        <Container maxWidth={"xl"}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default App;
