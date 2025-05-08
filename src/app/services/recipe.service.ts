import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { forkJoin, map, Observable } from "rxjs";

export interface Meal{
  idMeal:string;
  strMeal: string;
  strInstructions:string;
  strMealThumb:string;
  strCategory:string;
}


export class RecipeService {
http= inject(HttpClient)
private api = 'https://www.themealdb.com/api/json/v1/1';

fetchRandomMeals(): Observable< Meal[] > {
  const requests = [];
  for (let i = 0; i < 9; i++) {
    requests.push(this.http.get<{ meals: Meal[] }>(`${this.api}/random.php`));
  }

  return forkJoin(requests).pipe(
    map((responses) => {
      // responses = [{ meals: [...] }, { meals: [...] }, ...]
      return responses
        .map(res => res.meals?.[0]) // ta bara första måltiden från varje svar
        .filter(Boolean); // filtrera bort eventuella undefined
    })
  );


}
searchMeals(query: string): Observable<{ meals: Meal[] }> {
  return this.http.get<{ meals: Meal[] }>(`${this.api}/search.php?s=${query}`);
}

fetchCategories(): Observable<{ categories: { strCategory: string }[] }> {
  return this.http.get<{ categories: { strCategory: string }[] }>(`${this.api}/categories.php`);
}

fetchByCategory(category: string): Observable<{ meals: Meal[] }> {
  return this.http.get<{ meals: Meal[] }>(`${this.api}/filter.php?c=${category}`);
}

}