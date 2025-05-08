import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RandomRecipesComponent } from './components/random-recipes/random-recipes.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { CommonModule } from '@angular/common';
import { Meal, RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule,SearchBarComponent, CategoriesComponent, RandomRecipesComponent, RecipeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[RecipeService]
})
export class AppComponent {
  searchResults: Meal[] = [];
  hasSearched = false;

  constructor(private recipeService: RecipeService) {}

  async handleSearch(query: string) {
    this.recipeService.searchMeals(query).subscribe((res) => {
      this.searchResults = res.meals || [];
    });
    
    this.hasSearched = true;
  }

  async handleCategorySelect(category: string) {
    this.recipeService.fetchByCategory(category).subscribe((res) => {
      this.searchResults = res.meals || [];
    });
    
    this.hasSearched = true;
  }
}
