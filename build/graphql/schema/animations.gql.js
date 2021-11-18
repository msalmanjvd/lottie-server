"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
require("./users");
require("./tags");
let typeDefs = (0, apollo_server_express_1.gql) `
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  # scalar animationJson

  type Animation {
    id: String!
    userId: String
    title: String
    payload: String
    user: userType
    tags: [tagType]
    fileUrl: String
  }

  scalar Upload

  input hi {
    msg: String!
  }
  type Mutation {
    addnewAnimation(newpost: newpost): Animation
    animationUpload(file: Upload!): String
    animationJson(msg: String!): Animation
  }

  input newpost {
    userId: String!
    title: String
    payload: String
    tags: [String!]
  }

  input ID {
    id: String!
  }

  type Query {
    getAnimationById(id: ID): Animation
    getAnimationByUserId(userId: ID): [Animation]
    getAllPost: [Animation]
    createPost: [Animation]
    editPost: [Animation]
    animations: Animation
  }
`;
exports.default = typeDefs;
