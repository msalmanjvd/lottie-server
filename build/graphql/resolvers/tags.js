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
const tags_1 = require("../../controllers/tags");
require("./animations");
const TagsResolver = {
    Query: {
        getAllTags: () => __awaiter(void 0, void 0, void 0, function* () {
            const results = yield (0, tags_1.getAllTags)();
            return results;
        }),
        getAnimationByTag: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            let { tag } = args;
            const Result = yield (0, tags_1.getAnimationsByTag)(tag);
            return Result;
        }),
    },
};
exports.default = TagsResolver;
