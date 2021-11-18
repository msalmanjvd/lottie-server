import { gql } from "apollo-server-express";
import "./animations";

let typeDefs = gql`
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

export default typeDefs;
