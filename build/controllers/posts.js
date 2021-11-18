"use strict";
/** source/controllers/posts.ts */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.addPost = void 0;
const posts_1 = __importDefault(require("./../database/entities/posts"));
// adding a post
const addPost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, payload, userId } = data.newpost;
    let post = new posts_1.default();
    post.userId = userId;
    post.title = title;
    post.fileUrl = payload;
    const client = posts_1.default.create(post);
    yield client.save();
});
exports.addPost = addPost;
// retereicing all posts
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    // const userRepository = await getConnection()
    //   .getRepository(Posts)
    //   .createQueryBuilder()
    //   .select()
    //   .getMany();
    const client = yield posts_1.default.find({ relations: ["user"] });
    console.log(client);
    return client;
    // return userRepository.find({
    //   where: [
    //     {
    //       title: Like("%hello%"),
    //     },
    //   ],
    // });
    // const client = await Posts.find();
    // console.log(client);
    // return userRepository;
});
exports.getAllPosts = getAllPosts;
