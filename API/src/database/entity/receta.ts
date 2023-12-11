import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
@Entity({ name: 'recetas' })
export class Recetas extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;
  @Column({ unique: true })
  tipo_cocina: string;
  @Column({ unique: false })
  ingredientes: string;
  @Column({ unique: false })
  instrucciones: string;
}