import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
  query {
    movies {
      results {
        posterPath
        id
        releaseDate
        title
      }
      totalPages
      totalResults
      page
    }
  }
`;
