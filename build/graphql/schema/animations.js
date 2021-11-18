"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
require("./users");
require("./tags");
let typeDefs = (0, apollo_server_express_1.gql) `
  scalar Date

  type Animation {
    id: String!
    userId: String
    title: String
    createdAt: Date
    user: userType
    tags: [tagType]
    fileUrl: String
  }

  type Mutation {
    addnewAnimation(newpost: newpost): Animation
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
    getAllAnimations: [Animation]
  }
`;
exports.default = typeDefs;
