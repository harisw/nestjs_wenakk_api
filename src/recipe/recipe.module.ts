import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Category } from './entities/category.entity';
import { Origin } from './entities/origin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe, Category, Origin])],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
