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
const animations_1 = require("../../controllers/animations");
const animationResolver = {
    Query: {
        //return all aniamations
        getAllAnimations: () => __awaiter(void 0, void 0, void 0, function* () {
            const results = yield (0, animations_1.getAllAnimatons)();
            return results;
        }),
        //@returns animation by id given
        getAnimationById: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            let { id } = args;
            const Result = yield (0, animations_1.getAnimationById)(id);
            return Result;
        }),
        //@return animation by user id given
        getAnimationByUserId: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            let { userId } = args;
            const Result = yield (0, animations_1.getAnimationByUserId)(userId);
            return Result;
        }),
    },
    /**
     * @Muations
     */
    //@creats new animation
    Mutation: {
        addnewAnimation: (_, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            (0, animations_1.addNewAnimation)(args);
            return {
                title: "Hi",
                payload: "Here is the payload!",
            };
        }),
    },
};
exports.default = animationResolver;
