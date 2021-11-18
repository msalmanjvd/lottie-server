"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSchema = exports.UserSchema = exports.AnimationsSchema = void 0;
const animations_1 = __importDefault(require("./animations"));
exports.AnimationsSchema = animations_1.default;
const users_1 = __importDefault(require("./users"));
exports.UserSchema = users_1.default;
const tags_1 = __importDefault(require("./tags"));
exports.TagSchema = tags_1.default;
