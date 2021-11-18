import { gql } from "apollo-server-express";
import "./users";
import "./tags";
let typeDefs = gql`
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

export default typeDefs;
