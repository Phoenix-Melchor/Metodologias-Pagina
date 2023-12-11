import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
@Entity({ name: 'receta' })
export class Recetas extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  @Column()
  tipo_cocina: string;
  @Column()
  ingredientes: string;
  @Column()
  instrucciones: string;
}