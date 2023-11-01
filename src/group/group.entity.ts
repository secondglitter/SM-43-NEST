import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  NameGroup: string;

  @Column({type:'varchar', length: 500})
  Description: string;

  @Column()
  Members: number;

  @Column()
  Class: string;

  @Column()
  List1: string;

  @Column()
  List2: string;

  @Column()
  List3: string;

  @Column()
  List4: string;

  @Column()
  Image: string;

  @Column()
  Image1: string;

  @Column()
  Image2: string;
  
  @Column()
  Image3: string;

}