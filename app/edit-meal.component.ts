import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template:`
    <div class="meal-form">
      <h3 class="selected">Edit {{ meal.name }}: </h3>
      <div class="form-group">
        <label>Name:</label>
        <input [(ngModel)] = "meal.name" class="col-sm6 input-lg meal-form"/>
      </div>
      <div class="form-group">
        <label>Source:</label>
        <input [(ngModel)] = "meal.source" class="col-sm6 input-lg meal-form"/>
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input [(ngModel)] = "meal.details" class="col-sm6 input-lg meal-form"/>
      </div>
      <div class="form-group">
        <label>Rating:</label>
        <input [(ngModel)] = "meal.rating" class="col-sm6 input-lg meal-form"/>
      </div>
      <div class="form-group">
        <label>Calories:</label>
        <input [(ngModel)] = "meal.calories" class="col-sm6 input-lg meal-form"/>
      </div>
    </div>
  `
})

export class EditMealComponent {
  public Meal: Meal;
}
