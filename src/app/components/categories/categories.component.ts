import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-categories',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  @Output() select = new EventEmitter<string>();
  categories: string[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.fetchCategories().subscribe((res) => {
      this.categories = res.categories.map((c) => c.strCategory);
    });
  }

  selectCategory(category: string): void {
    this.select.emit(category);
  }
}
