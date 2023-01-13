import { CssBaseline, Container, Box } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigation } from "./components";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
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
        <ToastContainer />
      </>
    </ApolloProvider>
  );
}

export default App;
