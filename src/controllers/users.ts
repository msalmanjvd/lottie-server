/** source/controllers/posts.ts */

import { getManager, getConnection, Like } from "typeorm";

import Users from "./../database/entities/users";
import { Logs } from "../utils/logger";
interface UserData {
  newUser: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

// adding a user
const addUser = async (data: UserData) => {
  try {
    const { firstName, lastName, email } = data.newUser;
    let user = new Users();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    const client = Users.create(user);
    const Result = await client.save();
    return Result;
  } catch (err) {
    console.log(err);
    Logs.Error("Error!", "Cannot Create User!");
    return null;
  }
};

// get all users with animations
const getAllUsers = async () => {
  try {
    const client = await Users.find({ relations: ["animations"] });
    return client;
  } catch (err) {
    Logs.Error("Error!", "Cannot Find Users!");
    return null;
  }
};

type query = {
  email: String;
};
// get user with email  @e.g from login
const getUserById = async (data: query) => {
  const Email = data.email;
  try {
    const userRepository = await getConnection()
      .getRepository(Users)
      .createQueryBuilder("user")
      // .select(["user.firstName", "user.lastName", "user.email"])
      .select()
      .where("user.email = :email", { email: Email })
      .getOne();

    return userRepository;
  } catch (err) {
    Logs.Error("Error!", `Cannot Find User With Email ${Email}`);
    console.log(err);
    return null;
  }
};
export { addUser, getUserById, getAllUsers };
