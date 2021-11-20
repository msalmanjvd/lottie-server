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
exports.getAnimationsByTag = exports.getAllTags = void 0;
/** source/controllers/tags.ts */
const typeorm_1 = require("typeorm");
const tags_1 = __importDefault(require("../database/entities/tags"));
const animations_1 = __importDefault(require("../database/entities/animations"));
const logger_1 = require("../utils/logger");
// get animations by tag
const getAnimationsByTag = (tag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // find unique animation ids against the tag
        tag = tag.toLowerCase();
        let uniqueAnimationIds = yield (0, typeorm_1.getRepository)(tags_1.default)
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
            let taggedAnimations = yield animations_1.default.find({
                where: uniqueAnimationIds,
                relations: ["user"],
                order: { createdAt: "DESC" },
            });
            return taggedAnimations;
        }
        else {
            logger_1.Logs.Error("Error", "No Animations Found!");
            return null;
        }
    }
    catch (err) {
        logger_1.Logs.Error("Error", "Cannot Fetch Animations!");
        return null;
    }
});
exports.getAnimationsByTag = getAnimationsByTag;
// get all unique tags from
const getAllTags = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // find unique tags
        let uniqueTags = yield (0, typeorm_1.getRepository)(tags_1.default)
            .createQueryBuilder("Tags")
            .select('DISTINCT ("name")')
            .getRawMany();
        return uniqueTags;
    }
    catch (err) {
        logger_1.Logs.Error("Error", "Cannot Fetch Tags!");
        return null;
    }
});
exports.getAllTags = getAllTags;
