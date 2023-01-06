import { objectType } from "nexus";
import { getGenres, getPopular } from "../modules";

export const Movies = objectType({
  name: "Movies",
  definition(t) {
    t.nonNull.int("page");
    t.nonNull.int("totalResults");
    t.nonNull.int("totalPages");
    t.nonNull.list.nonNull.field("results", { type: Movie });
  },
});

export const Movie = objectType({
  name: "Movie",
  definition(t) {
    t.nonNull.string("title");
    t.nonNull.string("releaseDate");
    t.string("posterPath");
    t.list.field("genres", { type: Genre });
    t.nonNull.int("id");
  },
});

export const Genre = objectType({
  name: "Genre",
  definition(t) {
    t.nonNull.int("id");
    t.string("name");
  },
});

// export const Genres = objectType({
//   name: "Genres",
//   definition(t) {
//     t.nonNull.list.field("genre", { type: Genre });
//   },
// });

export const MoviesQuery = objectType({
  name: "Query",
  definition(t) {
    t.nonNull.field("movies", {
      type: "Movies",
      async resolve(parent, args, context, info): Promise<any> {
        return await getPopular();
      },
    });
    // t.nonNull.field("genres", {
    //   type: "Genres",
    //   async resolve(parent, args, context, info): Promise<any> {
    //     return await getGenres("5");
    //   },
    // });
  },
});
