import { gql } from "apollo-server-express";
// import "./animations";
let typeDefs = gql`
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

export default typeDefs;
