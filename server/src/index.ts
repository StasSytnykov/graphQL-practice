import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";
dotenv.config();

import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
});

const port = 4000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
