"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
require("./users");
let typeDefs = (0, apollo_server_express_1.gql) `
  type Animation {
    userId: String!
    title: String!
    payload: String
    user: userType
  }

  type Mutation {
    addnewAnimation(newpost: newpost): Animation
  }

  input newpost {
    userId: String!
    title: String
    payload: String
  }

  type Query {
    getAllPost: [Animation]
    createPost: [Animation]
    editPost: [Animation]
    animations: Animation
  }
`;
exports.default = typeDefs;
