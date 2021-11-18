"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
require("./users");
require("./tags");
let Recipe = class Recipe {
};
__decorate([
    Field((type) => ID),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], Recipe.prototype, "creationDate", void 0);
__decorate([
    Field((type) => [String]),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
Recipe = __decorate([
    ObjectType()
], Recipe);
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
