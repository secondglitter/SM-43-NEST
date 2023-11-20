import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trivia {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  Pregunta: string;
  
  @Column()
  Correcta: string;

  @Column()
  Incorrecta1: string;

  @Column()
  Incorrecta2: string;

  @Column()
  Incorrecta3: string;

}