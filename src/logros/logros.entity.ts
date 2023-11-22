import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Logro {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  NombreLogro: string;
  
  @Column()
  Description: string;

  @Column()
  Imagen: string;

  @Column()
  Valor: string;

  @Column()
  Trofeo: string;

}