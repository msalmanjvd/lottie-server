"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
require("./animations");
let typeDefs = (0, apollo_server_express_1.gql) `
  type userType {
    id: String!
    firstName: String
    lastName: String
    email: String
    animations: [Animation]
  }

  type Mutation {
    addnewUser(newUser: newUser): userType
  }

  input newUser {
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    getUser(email: String): userType!
    getAllUsers: [userType!]
  }
`;
exports.default = typeDefs;
