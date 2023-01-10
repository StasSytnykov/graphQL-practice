import { objectType, intArg, extendType } from "nexus";
import { getDetails, getPopular } from "../modules";

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
      async resolve(parent, args, context, info): Promise<any> {
        return await getPopular(args.take ? args.take : undefined);
      },
    });
    t.nonNull.field("movieDetails", {
      type: Movie,
      args: {
        id: intArg(),
      },
      async resolve(parent, args, context, info): Promise<any> {
        return await getDetails(args.id ? args.id : 1);
      },
    });
  },
});
