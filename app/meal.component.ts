import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template:`
  <div>
    <h3>{{ meal.name }} ({{ meal.rating }} stars, {{ meal.calories }} calories)</h3>
    <p><span class="bold">From:</span> {{ meal.source }} <span class="bold">Date:</span> {{ meal.date }}</p>
    <p><span class="bold">Details:</span> {{ meal.details }}</p>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
