import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Historia {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  NameGame: string;

  @Column()
  Image: string;
  
  @Column({type:'varchar', length: 1000})
  Description1: string;

  @Column({type:'varchar', length: 1000})
  Description2: string;

  @Column({type:'varchar', length: 1000})
  Description3: string;

  @Column()
  NameList1: string;

  @Column()
  List1: string;

  @Column()
  NameList2: string;

  @Column()
  List2: string;

  @Column()
  NameList3: string;

  @Column()
  List3: string;

  @Column()
  SubName: string;

  @Column({type:'varchar', length: 1000})
  Description4: string;

}