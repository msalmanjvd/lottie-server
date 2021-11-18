"use strict";
// /** source/controllers/posts.ts */
// import { getManager, getConnection, Like } from "typeorm";
// import { getRepository } from "typeorm";
// import Users from "./../database/entities/users";
// import connection from "./../database/connection";
// interface Post {
//   title: String;
//   payload: String;
// }
// // adding a post
// const addPost = async (data: any) => {
//   const { firstName, lastName, email } = data.newpost;
//   let post = new Users();
//   post.title = title;
//   post.payload = payload;
//   const client = Posts.create(post);
//   await client.save();
// };
// // retereicing all posts
// const getAllPosts = async () => {
//   const userRepository = await getConnection()
//     .getRepository(Posts)
//     .createQueryBuilder()
//     .select()
//     .getMany();
//   // return userRepository.find({
//   //   where: [
//   //     {
//   //       title: Like("%hello%"),
//   //     },
//   //   ],
//   // });
//   // const client = await Posts.find();
//   // console.log(client);
//   return userRepository;
// };
// export { addPost, getAllPosts };
