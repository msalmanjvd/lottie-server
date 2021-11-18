"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagResolver = exports.UserResolver = exports.AnimationResolver = void 0;
const animations_1 = __importDefault(require("./animations"));
exports.AnimationResolver = animations_1.default;
const users_1 = __importDefault(require("./users"));
exports.UserResolver = users_1.default;
const tags_1 = __importDefault(require("./tags"));
exports.TagResolver = tags_1.default;
