"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = require("./../../controllers/posts");
const postResolver = {
    Query: {
        animations: () => __awaiter(void 0, void 0, void 0, function* () {
            const results = yield (0, posts_1.getAllPosts)();
            console.log("posts >>>", results);
            return {
                title: "Hi",
                payload: "Here is the payload!",
            };
        }),
        getAllPost: () => __awaiter(void 0, void 0, void 0, function* () {
            const results = yield (0, posts_1.getAllPosts)();
            console.log("posts >>>", results);
            return results;
        }),
        // editPost: () => "Edit Post!",
    },
    Mutation: {
        addnewAnimation: (_, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(args);
            (0, posts_1.addPost)(args);
            return {
                title: "Hi",
                payload: "Here is the payload!",
            };
        }),
    },
};
exports.default = postResolver;
