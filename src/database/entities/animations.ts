// import {
//   Entity,
//   Column,
//   Index,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
//   BaseEntity,
// } from "typeorm";

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

import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import User from "./users";
import Tags from "./tags";

@Entity("animations")
export default class Animations extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column()
  fileUrl: string;

  @Column()
  userId: number;

  @Column({ default: true })
  isPublished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: boolean;

  @DeleteDateColumn()
  deletedDate: boolean;

  //many animations can bleong to one user
  @ManyToOne(() => User, (author: User) => author.animations)
  @JoinColumn()
  user: User;

  //one animation can bleong to may tags
  @OneToMany(() => Tags, (tag: Tags) => tag.animations)
  @JoinColumn()
  tags: Tags;
}
