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
exports.getAllUsers = exports.getUSerById = exports.addUser = void 0;
const typeorm_1 = require("typeorm");
const users_1 = __importDefault(require("./../database/entities/users"));
// adding a user
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email } = data.newUser;
    let user = new users_1.default();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    const client = users_1.default.create(user);
    yield client.save();
});
exports.addUser = addUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield users_1.default.find({ relations: ["animations"] });
        console.log(client);
        // const allUsers = await getConnection()
        //   .getRepository(Users)
        //   .createQueryBuilder()
        //   .select()
        //   .getMany();
        return client;
    }
    catch (err) {
        console.log(err);
        return null;
    }
});
exports.getAllUsers = getAllUsers;
// retereicing all posts
const getUSerById = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepository = yield (0, typeorm_1.getConnection)()
            .getRepository(users_1.default)
            .createQueryBuilder("user")
            // .select(["user.firstName", "user.lastName", "user.email"])
            .select()
            .where("user.email = :email", { email: "hello@gmail.com" })
            .getOne();
        return userRepository;
    }
    catch (err) {
        console.log(err);
        return null;
    }
});
exports.getUSerById = getUSerById;
