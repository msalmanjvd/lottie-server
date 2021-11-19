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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnimationByUserId = exports.getAnimationById = exports.getAllAnimatons = exports.addNewAnimation = void 0;
/** source/controllers/posts.ts */
const animations_1 = __importDefault(require("../database/entities/animations"));
const tags_1 = __importDefault(require("../database/entities/tags"));
const typeorm_1 = require("typeorm");
const logger_1 = require("../utils/logger");
const addNewAnimation = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // get a connection and create a new query runner
    const connection = (0, typeorm_1.getConnection)();
    const queryRunner = connection.createQueryRunner();
    yield queryRunner.startTransaction();
    try {
        const { title, payload, userId, tags } = data.newpost;
        let post = new animations_1.default();
        post.userId = userId;
        post.title = title;
        post.fileUrl = payload;
        const client = animations_1.default.create(post);
        let animation = yield client.save();
        if (tags.length) {
            let tagsData = tags.map((tag) => {
                let newTag = new tags_1.default();
                newTag.name = tag.toLowerCase();
                newTag.animationsId = animation.id.toString();
                return {
                    name: tag.toLowerCase(),
                    animationsId: animation.id,
                };
            });
            yield tags_1.default.save(tagsData);
            yield queryRunner.commitTransaction();
            return animation;
        }
        logger_1.Logs.Info("Record Created!", "Animation Data Saved in The Database.");
    }
    catch (error) {
        // since we have errors let's rollback changes we made
        logger_1.Logs.Error("Db Error!", "Cannonot Create This Animation.");
        logger_1.Logs.Error("Error Detail!", error);
        yield queryRunner.rollbackTransaction();
    }
    finally {
        yield queryRunner.release();
    }
});
exports.addNewAnimation = addNewAnimation;
/** //
 *
 * @returns all animations
 */
const getAllAnimatons = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield animations_1.default.find({
            relations: ["tags", "user"],
            order: { createdAt: "DESC" },
        });
        return client;
    }
    catch (err) {
        logger_1.Logs.Error("Error!", `Cannot Find Animations!`);
        return null;
    }
});
exports.getAllAnimatons = getAllAnimatons;
const getAnimationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animaiton = yield animations_1.default.findOne({
            select: ["title", "id", "fileUrl"],
            where: { id },
            relations: ["tags", "user"],
        });
        return animaiton;
    }
    catch (err) {
        logger_1.Logs.Error("Error!", `Cannot Find Animation of id ${id}!`);
        return null;
    }
});
exports.getAnimationById = getAnimationById;
/**
 *
 * @param id animation id
 * @returns animation against given id
 */
const getAnimationByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animaiton = yield animations_1.default.find({
            select: ["title", "id", "fileUrl"],
            where: { userId },
            relations: ["tags", "user"],
            order: { createdAt: "DESC" },
        });
        return animaiton;
    }
    catch (err) {
        logger_1.Logs.Error("Error!", `Cannot Find Animation Agains User >  ${userId}!`);
        return null;
    }
});
exports.getAnimationByUserId = getAnimationByUserId;
