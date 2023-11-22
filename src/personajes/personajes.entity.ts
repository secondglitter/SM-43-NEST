import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Personaje {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  NombrePersonaje: string;
  
  @Column()
  Description: string;

  @Column()
  Juego: string;

  @Column()
  Imagen: string;

}