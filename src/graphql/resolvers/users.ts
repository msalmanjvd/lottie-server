import { addUser, getUserById, getAllUsers } from "../../controllers/users";
import { IResolvers } from "@graphql-tools/utils";

const usersResolver: IResolvers = {
  // @quries
  Query: {
    getUser: async (_: any, args: any, context: any, info: any) => {
      const results = await getUserById(args);

      return results;
    },
    getAllUsers: async () => {
      const results = await getAllUsers();
      return results;
    },
  },
  Mutation: {
    addnewUser: async (_: any, args: any, context: any, info: any) => {
      addUser(args);
      return {
        fisrtName: "added!",
      };
    },
  },
};
export default usersResolver;
