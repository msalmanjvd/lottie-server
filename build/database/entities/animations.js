"use strict";
// import {
//   Entity,
//   Column,
//   Index,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
//   BaseEntity,
// } from "typeorm";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @Entity("posts")
// export default class Posts extends BaseEntity {
//   @PrimaryGeneratedColumn("uuid")
//   id: string;
//   @Index({ fulltext: true })
//   @Column()
//   title: string;
//   //   @Column()
//   //   animation_id: number;
//   @Column()
//   payload: string;
//   //   @Column()
//   //   isPublished: boolean;
//   @CreateDateColumn()
//   postDate: Date;
//   @UpdateDateColumn()
//   updatedDate: Date;
//   @UpdateDateColumn()
//   deletedDate: boolean;
// }
const typeorm_1 = require("typeorm");
const users_1 = __importDefault(require("./users"));
const tags_1 = __importDefault(require("./tags"));
let Animations = class Animations extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", Number)
], Animations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Animations.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Animations.prototype, "fileUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Animations.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Animations.prototype, "isPublished", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Animations.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Boolean)
], Animations.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Boolean)
], Animations.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_1.default, (author) => author.animations),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", users_1.default)
], Animations.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tags_1.default, (tag) => tag.animations),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tags_1.default)
], Animations.prototype, "tags", void 0);
Animations = __decorate([
    (0, typeorm_1.Entity)("animations")
], Animations);
exports.default = Animations;
