import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list 
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];

  constructor(){
    this.meals = [
      new Meal("Salad", "Home", "Fresh tomatoes, yum!", 4, 350, 0),
      new Meal("Pizza", "Life of Pi", "such a good happy hour!", 5, 600, 1),
      new Meal("Quesadilla", "Home", "with veggies and lots of guacamole", 4, 700, 2),
      new Meal("Rice bowl", "Cafe Yumm", "with bbq tofu, pricey but good", 5, 800, 3),
      new Meal("Tacos", "Mi Mero Mole", "Finally tried all-you-can-eat Taco Tuesday!", 5, 1200, 4)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
