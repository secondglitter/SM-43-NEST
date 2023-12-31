import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  Categoria: string;
  
  @Column()
  Imagen: string;

  @Column()
  URL: string;

}