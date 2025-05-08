import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Meal, RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-random-recipes',
  standalone:true,
  imports: [CommonModule, RecipeCardComponent],
  templateUrl: './random-recipes.component.html',
  styleUrl: './random-recipes.component.css'
})
export class RandomRecipesComponent {
  meals: Meal[]=[];


  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.fetchRandomMeals().subscribe((res) => {
      if (res) {
        console.log(res)
        this.meals = res 
      }
    });
  }

}
