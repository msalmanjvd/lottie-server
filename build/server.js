"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./database/connection"));
const apollo_server_express_1 = require("apollo-server-express");
const logger_1 = require("./utils/logger");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("./graphql/schema/index");
const index_2 = require("./graphql/resolvers/index");
function startApolloServer(typeDefs, resolvers) {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs,
            resolvers,
        });
        yield server.start();
        dotenv_1.default.config();
        const app = (0, express_1.default)();
        server.applyMiddleware({ app });
        const jsonParser = express_1.default.json();
        app.use(jsonParser);
        app.use((0, cors_1.default)());
        // cehck if database is conencted or not
        const dbConnection = yield (0, connection_1.default)();
        // start server with desired port only if db is connected else throw exception
        if (dbConnection) {
            yield new Promise((resolve) => 
            // app.listen({ port: process.env.PORT }, resolve)
            app.listen({ port: 6060 }, resolve));
            logger_1.Logs.Info("Success", `🚀 ${process.env.PORT}Server listening on port ${process.env.PORT} and graphql endpoint is${server.graphqlPath}`);
        }
        else {
            throw new Error("Cannot Connected To Database!!");
        }
    });
}
/**
 * @start apollo server
 */
startApolloServer([index_1.AnimationsSchema, index_1.UserSchema, index_1.TagSchema], [index_2.AnimationResolver, index_2.UserResolver, index_2.TagResolver]);
