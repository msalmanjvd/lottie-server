import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import Animations from "./animations";

@Entity()
export default class Tags extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  animationsId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: boolean;

  @DeleteDateColumn()
  deletedDate: boolean;

  // many tags can belong to one animation
  @ManyToOne(() => Animations)
  @JoinColumn()
  animations: Animations;
}
