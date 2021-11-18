import express, { Express } from "express";
import DbConnection from "./database/connection";
import { ApolloServer } from "apollo-server-express";
import { Logs } from "./utils/logger";
import cors from "cors";
import dotEnv from "dotenv";

import {
  AnimationsSchema,
  UserSchema,
  TagSchema,
} from "./graphql/schema/index";
import {
  AnimationResolver,
  UserResolver,
  TagResolver,
} from "./graphql/resolvers/index";

async function startApolloServer(typeDefs: Array<any>, resolvers: Array<any>) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  dotEnv.config();
  const app: Express = express();
  server.applyMiddleware({ app });
  const jsonParser = express.json();

  app.use(jsonParser);
  app.use(cors());

  // cehck if database is conencted or not
  const dbConnection: Boolean = await DbConnection();

  // start server with desired port only if db is connected else throw exception
  if (dbConnection) {
    await new Promise<void>((resolve) =>
      // app.listen({ port: process.env.PORT }, resolve)
      app.listen({ port: 6060 }, resolve)
    );
    Logs.Info(
      "Success",
      `🚀 ${process.env.PORT}Server listening on port ${process.env.PORT} and graphql endpoint is${server.graphqlPath}`
    );
  } else {
    throw new Error("Cannot Connected To Database!!");
  }
}

/**
 * @start apollo server
 */

startApolloServer(
  [AnimationsSchema, UserSchema, TagSchema],
  [AnimationResolver, UserResolver, TagResolver]
);
