"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
let typeDefs = (0, apollo_server_1.gql) `
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  # scalar animationJson

  type Animation {
    title: String
    payload: String
  }

  type Mutation {
    addnewAnimation(newpost: newpost): Animation
  }

  input newpost {
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
