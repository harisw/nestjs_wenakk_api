import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity('origins')
export class Origin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100})
  name: string;

  @OneToMany(() => Recipe, (recipe) => recipe.origin)
  recipes: Recipe[];
}