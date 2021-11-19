/** source/controllers/tags.ts */
import { getRepository } from "typeorm";
import Tags from "../database/entities/tags";
import Animations from "../database/entities/animations";
import { Logs } from "../utils/logger";

// get all tags
const getAllTags = async () => {
  try {
    const result = await Tags.find({});
    return result;
  } catch (err) {
    Logs.Error("Error", "Cannot Fetch Tags!");
    return null;
  }
};

// get animations by tag
const getAnimationsByTag = async (tag: String) => {
  try {
    // find unique animation ids against the tag
    tag = tag.toLowerCase();
    let uniqueAnimationIds = await getRepository(Tags)
      .createQueryBuilder("Tags")
      .select('DISTINCT ("animationsId")')
      .where("Tags.name = :name", { name: tag })
      .getRawMany();

    // format array for animation query @requires id for each animation
    uniqueAnimationIds = uniqueAnimationIds.map((data) => {
      return { id: data.animationsId };
    });

    if (uniqueAnimationIds.length || tag === "all") {
      //fetch animation having above ids
      let taggedAnimations = await Animations.find({
        where: uniqueAnimationIds,
        relations: ["user"],
        order: { id: "ASC" },
      });

      return taggedAnimations;
    } else {
      Logs.Error("Error", "No Animations Found!");
      return null;
    }
  } catch (err) {
    Logs.Error("Error", "Cannot Fetch Animations!");
    return null;
  }
};
export { getAllTags, getAnimationsByTag };
