import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { MOVIES_BY_IDS } from "./queries";
import Grid from "@mui/material/Unstable_Grid2";
import { MovieCard } from "../../components";
import { IMovie, StyledGrid } from "../Home";

export const Recommendation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<{ ids: string[]; title: string }>({
    ids: [],
    title: "",
  });
  const { loading, error, data } = useQuery(MOVIES_BY_IDS, {
    variables: { ids: params.ids },
  });

  useEffect(() => {
    const ids = searchParams.get("ids");
    const title = searchParams.get("title");

    setParams({
      ids: ids ? ids.split(",") : [],
      title: title ? title : "Default title",
    });
  }, [searchParams]);
  console.log(data);

  if (error) return <div>Error</div>;

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
            {params.title}
          </Typography>
          <StyledGrid container spacing={2}>
            {data.moviesByIds.map((movie: IMovie) => (
              <Grid key={movie.id} sm={4} md={3} lg={2}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </StyledGrid>
        </>
      )}
    </>
  );
};
