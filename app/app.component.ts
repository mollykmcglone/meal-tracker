import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1 class="center">Meal Tracker</h1>
      <p class="center">Keep tabs on what you're eating</p>
    </div>
    <div class="container">
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];

  constructor(){
    this.meals = [
      new Meal("Salad", "Home", "Fresh tomatoes, yum!", 4, 350, "2016-08-01", 0),
      new Meal("Pizza", "Life of Pi", "such a good happy hour!", 5, 600, "2016-08-02", 1),
      new Meal("Quesadilla", "Home", "with veggies and lots of guacamole", 4, 700, "2016-08-02", 2),
      new Meal("Rice bowl", "Cafe Yumm", "with bbq tofu, pricey but good", 5, 800, "2016-08-01", 3),
      new Meal("Tacos", "Mi Mero Mole", "Finally tried all-you-can-eat Taco Tuesday!", 5, 1200, "2016-08-01", 4),
      new Meal("Tofu Sandwich", "Boke Dokie", "very good but too many fries", 4, 400, "2016-08-02", 5)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
