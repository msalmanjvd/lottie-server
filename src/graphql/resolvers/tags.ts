import { getAllTags, getAnimationsByTag } from "../../controllers/tags";
import "./animations";
import { IResolvers } from "@graphql-tools/utils";

const TagsResolver: IResolvers = {
  Query: {
    getAllTags: async () => {
      const results = await getAllTags();
      return results;
    },
    getAnimationByTag: async (_: any, args: any) => {
      let { tag } = args;
      const Result = await getAnimationsByTag(tag);
      return Result;
    },
  },
};

export default TagsResolver;
