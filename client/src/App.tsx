import { CssBaseline, Container } from "@mui/material";
import { Navigation } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Container maxWidth={"xl"}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
