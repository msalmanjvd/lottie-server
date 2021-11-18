"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
// import "./animations";
let typeDefs = (0, apollo_server_express_1.gql) `
  type tagType {
    name: String
    id: String
    animationsId: String
  }

  type Query {
    getAllTags: [tagType!]
    getAnimationByTag(tag: String): [Animation]
  }
`;
exports.default = typeDefs;
