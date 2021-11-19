import { addUser, getUserById, getAllUsers } from "../../controllers/users";
import { IResolvers } from "@graphql-tools/utils";

const usersResolver: IResolvers = {
  // @quries
  Query: {
    getUser: async (_: any, args: any, context: any, info: any) => {
      const Results = await getUserById(args);

      return Results;
    },
    getAllUsers: async () => {
      const Results = await getAllUsers();
      return Results;
    },
  },
  Mutation: {
    addnewUser: async (_: any, args: any, context: any, info: any) => {
      const Results = await addUser(args);
      return Results;
    },
  },
};
export default usersResolver;
