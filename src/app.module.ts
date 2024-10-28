import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeModule } from './recipe/recipe.module';
import { Recipe } from './recipe/entities/recipe.entity';
import { Category } from './recipe/entities/category.entity';
import { Origin } from './recipe/entities/origin.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hari123',
      database: 'wenakk',
      entities: [Recipe, Category, Origin],
      synchronize: true,
      logging: true,
    }),
    RecipeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
