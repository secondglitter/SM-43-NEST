import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  UserName: string;
  
  @Column()
  Password: string;

  @Column()
  Email: string;

}