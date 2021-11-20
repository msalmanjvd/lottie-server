/** source/controllers/tags.ts */
import { getRepository } from "typeorm";
import Tags from "../database/entities/tags";
import Animations from "../database/entities/animations";
import { Logs } from "../utils/logger";

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
        order: { createdAt: "DESC" },
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

// get all unique tags from

const getAllTags = async () => {
  try {
    // find unique tags
    let uniqueTags = await getRepository(Tags)
      .createQueryBuilder("Tags")
      .select('DISTINCT ("name")')
      .getRawMany();

    return uniqueTags;
  } catch (err) {
    Logs.Error("Error", "Cannot Fetch Tags!");
    return null;
  }
};
export { getAllTags, getAnimationsByTag };
