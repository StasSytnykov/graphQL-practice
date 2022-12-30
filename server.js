const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
    user: User
  }
  
  type User {
    name: String
    age: Int
  }
`);

class User {
  constructor() {
    this.name = "John";
  }

  age() {
    return Math.floor(Math.random() * 100);
  }
}

// The rootValue provides a resolver function for each API endpoint
const rootValue = {
  rollDice: ({ numDice, numSides }) => {
    const output = [];
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  user: () => new User(),
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);
app.listen(4000);
console.log("My GraphQL");
