import { IResolvers } from "@graphql-tools/utils";
import {
  addNewAnimation,
  getAllAnimatons,
  getAnimationById,
  getAnimationByUserId,
} from "../../controllers/animations";

const animationResolver: IResolvers = {
  Query: {
    //return all aniamations
    getAllAnimations: async () => {
      const results = await getAllAnimatons();
      return results;
    },

    //@returns animation by id given
    getAnimationById: async (_: any, args: any) => {
      let { id } = args;
      const Result = await getAnimationById(id);
      return Result;
    },

    //@return animation by user id given
    getAnimationByUserId: async (_: any, args: any) => {
      let { userId } = args;
      const Result = await getAnimationByUserId(userId);
      return Result;
    },
  },

  /**
   * @Muations
   */

  //@creats new animation
  Mutation: {
    addnewAnimation: async (_: any, args: any, context: any, info: any) => {
      addNewAnimation(args);
      return {
        title: "Hi",
        payload: "Here is the payload!",
      };
    },
  },
};

export default animationResolver;
