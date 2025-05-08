import { Component, Input} from '@angular/core';
import { Meal } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
@Input() meal!:Meal;
}
