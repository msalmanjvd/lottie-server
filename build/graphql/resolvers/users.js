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
const users_1 = require("../../controllers/users");
const usersResolver = {
    // @quries
    Query: {
        getUser: (_, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            const results = yield (0, users_1.getUserById)(args);
            return results;
        }),
        getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
            const results = yield (0, users_1.getAllUsers)();
            return results;
        }),
    },
    Mutation: {
        addnewUser: (_, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            (0, users_1.addUser)(args);
            return {
                fisrtName: "added!",
            };
        }),
    },
};
exports.default = usersResolver;
