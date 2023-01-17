import { objectType, intArg, extendType, list, nonNull } from "nexus";
import { getDetails, getPopular } from "../modules";
import { Movies as MoviesClass } from "../modules/movies/entities/Movies";
import { Movie as MovieClass } from "../modules/movies/entities/Movie";

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
    t.nonNull.int("id");
    t.list.field("genres", { type: Genre });
  },
});

export const Genre = objectType({
  name: "Genre",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
  },
});

export const MoviesQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("movies", {
      type: "Movies",
      args: {
        take: intArg(),
      },
      async resolve(parent, args, context, info): Promise<MoviesClass> {
        return await getPopular(args.take ? args.take : undefined);
      },
    });
    t.nonNull.field("moviesByIds", {
      type: list(Movie),
      args: {
        ids: nonNull(list(nonNull("String"))),
      },
      async resolve(parent, args, context, info): Promise<MovieClass[]> {
        return await getDetails(args.ids);
      },
    });
  },
});
