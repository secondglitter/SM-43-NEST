import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  NameGroup: string;
  
  @Column()
  Members: number;

  @Column()
  Class: string;

  @Column()
  Image: string;

}