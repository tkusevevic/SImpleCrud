import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ default: false })
  confirmed: boolean;

  @ApiProperty()
  @Column({ default: true })
  active: boolean;
}
