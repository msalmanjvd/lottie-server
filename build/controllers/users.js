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
exports.getAllUsers = exports.getUserById = exports.addUser = void 0;
const typeorm_1 = require("typeorm");
const users_1 = __importDefault(require("./../database/entities/users"));
const logger_1 = require("../utils/logger");
// adding a user
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email } = data.newUser;
        let user = new users_1.default();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        const client = users_1.default.create(user);
        const Result = yield client.save();
        return Result;
    }
    catch (err) {
        console.log(err);
        logger_1.Logs.Error("Error!", "Cannot Create User!");
        return null;
    }
});
exports.addUser = addUser;
// get all users with animations
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield users_1.default.find({ relations: ["animations"] });
        return client;
    }
    catch (err) {
        logger_1.Logs.Error("Error!", "Cannot Find Users!");
        return null;
    }
});
exports.getAllUsers = getAllUsers;
// get user with email  @e.g from login
const getUserById = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const Email = data.email;
    try {
        const userRepository = yield (0, typeorm_1.getConnection)()
            .getRepository(users_1.default)
            .createQueryBuilder("user")
            // .select(["user.firstName", "user.lastName", "user.email"])
            .select()
            .where("user.email = :email", { email: Email })
            .getOne();
        return userRepository;
    }
    catch (err) {
        logger_1.Logs.Error("Error!", `Cannot Find User With Email ${Email}`);
        console.log(err);
        return null;
    }
});
exports.getUserById = getUserById;
