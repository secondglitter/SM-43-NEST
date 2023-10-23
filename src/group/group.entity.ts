import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  UserName: string;
  
  @Column()
  Password: string;

  @Column()
  Email: string;

}