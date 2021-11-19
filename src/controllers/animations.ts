/** source/controllers/posts.ts */
import Animations from "../database/entities/animations";
import Tags from "../database/entities/tags";
import { getConnection } from "typeorm";
import { Logs } from "../utils/logger";
/**
 *
 * @param data contains animation info like title,file url user id anf tags etc
 * It will save respective tags for animation
 */
type newpost = {
  newpost: {
    title: string;
    payload: string;
    userId: number;
    tags: Array<string>;
  };
};

const addNewAnimation = async (data: newpost) => {
  // get a connection and create a new query runner
  const connection = getConnection();
  const queryRunner = connection.createQueryRunner();
  await queryRunner.startTransaction();
  try {
    const { title, payload, userId, tags } = data.newpost;
    let post = new Animations();
    post.userId = userId;
    post.title = title;
    post.fileUrl = payload;

    const client = Animations.create(post);
    let animation = await client.save();
    if (tags.length) {
      let tagsData: Array<any> = tags.map((tag: any) => {
        let newTag = new Tags();
        newTag.name = tag.toLowerCase();
        newTag.animationsId = animation.id.toString();
        return {
          name: tag.toLowerCase(), // convert to lower case
          animationsId: animation.id,
        };
      });
      await Tags.save(tagsData);
      await queryRunner.commitTransaction();
      return animation;
    }
    Logs.Info("Record Created!", "Animation Data Saved in The Database.");
  } catch (error) {
    // since we have errors let's rollback changes we made
    Logs.Error("Db Error!", "Cannonot Create This Animation.");
    Logs.Error("Error Detail!", error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

/** //
 *
 * @returns all animations
 */
const getAllAnimatons = async () => {
  try {
    const client = await Animations.find({ relations: ["tags", "user"] });
    return client;
  } catch (err) {
    Logs.Error("Error!", `Cannot Find Animations!`);
    return null;
  }
};

/**
 *
 * @param id animation id
 * @returns animation against given id
 */
type Id = {
  id: number;
};
const getAnimationById = async (id: Id) => {
  try {
    const animaiton = await Animations.findOne({
      select: ["title", "id", "fileUrl"],
      where: { id },
      relations: ["tags", "user"],
    });
    return animaiton;
  } catch (err) {
    Logs.Error("Error!", `Cannot Find Animation of id ${id}!`);
    return null;
  }
};

/**
 *
 * @param id animation id
 * @returns animation against given id
 */

const getAnimationByUserId = async (userId: Id) => {
  try {
    const animaiton = await Animations.find({
      select: ["title", "id", "fileUrl"],
      where: { userId },
      relations: ["tags", "user"],
    });

    return animaiton;
  } catch (err) {
    Logs.Error("Error!", `Cannot Find Animation Agains User >  ${userId}!`);
    return null;
  }
};
export {
  addNewAnimation,
  getAllAnimatons,
  getAnimationById,
  getAnimationByUserId,
};
