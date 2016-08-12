import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template:`
    <div class="meal-form">
      <h3 class="selected">{{ meal.name }}</h3>
      <p><span class="bold">From:</span> {{ meal.source }} <span class="bold">Rating:</span> {{ meal.rating }} <span class="bold">Calories:</span> {{ meal.calories }}</p>
      <p><span class="bold">Date:</span> {{ meal.date }}</p>
      <p><span class="bold">Details:</span> {{ meal.details }}</p>
      <form>
      <h3 class="selected">Edit {{ meal.name }}: </h3>
        <div class="form-group row">
          <label for="name" class="col-xs-2 col-form-label">Name:</label>
          <div class="col-xs-10">
            <input class="form-control" [(ngModel)] = "meal.name" id="name">
          </div>
        </div>
        <div class="form-group row">
          <label for="source" class="col-xs-2 col-form-label">Source:</label>
          <div class="col-xs-10">
            <input class="form-control" [(ngModel)] = "meal.source" id="source">
          </div>
        </div>
        <div class="form-group row">
          <label for="details" class="col-xs-2 col-form-label">Details:</label>
          <div class="col-xs-10">
            <input class="form-control" [(ngModel)] = "meal.details" type="text area" id="details">
          </div>
        </div>
        <div class="form-group row">
          <label for="rating" class="col-xs-2 col-form-label">Rating</label>
          <div class="col-xs-4">
            <select class="form-control" [(ngModel)] = "meal.rating" id="rating">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="calories" class="col-xs-2 col-form-label">Calories:</label>
          <div class="col-xs-4">
            <input class="form-control" [(ngModel)] = "meal.calories" id="calories">
          </div>
        </div>
        <div class="form-group row">
          <label for="date" class="col-xs-2 col-form-label">Date:</label>
          <div class="col-xs-6">
            <input type="date" class="form-control" [(ngModel)] = "meal.date" id="date">
          </div>
        </div>
      </form>
    </div>
  `
})

export class EditMealComponent {
  public Meal: Meal;
}
