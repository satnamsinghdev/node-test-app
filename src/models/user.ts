import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true, default: "" })
  firstName!: string;

  @Column({ nullable: true, default: "" })
  lastName!: string;

  @Column({ nullable: true, default: "" })
  email!: string;

  @Column({ nullable: true, default: 0 })
  phoneNumber!: number;
}
