import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recipes')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  category_id: number;

  @Column({ type: 'int' })
  origin_id: number;

  @Column({ type: 'varchar', length: 200})
  name: string;

  @Column({ type: 'varchar', length: 50 })
  total_time: string;

  @Column({ type: 'timestamp' })
  date_published: Date;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'json', nullable: true })
  images: Record<string, any>;

  @Column({ type: 'json', nullable: true })
  keywords: Record<string, any>;

  @Column({ type: 'float8' })
  rating: number;

  // @Column({ type: 'int' })
  // review_count: number;

  @Column({ type: 'float8' })
  calories: number;

  @Column({ type: 'float8' })
  protein: number;

  @Column({ type: 'varchar', nullable: true })
  recipe_yield: string;

  @Column({ type: 'json', nullable: true})
  instructions: Record<string, any>

  @Column({ type: 'varchar', nullable: true })
  ingredients: Record<string, any>

  @Column({ type: 'int', nullable: true })
  recipe_id: number;
}
