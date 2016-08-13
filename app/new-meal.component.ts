import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template:`
  <div class="meal-form">
    <form>
    <h3 class="selected center">Add a New Meal: </h3>
      <div class="form-group row">
        <div class="col-xs-10">
          <input class="form-control" placeholder="Name" id="name" #newName>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-xs-10">
          <input class="form-control" placeholder="Source" id="source" #newSource>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-xs-10">
          <input class="form-control" placeholder="Details" id="details" #newDetails>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-xs-2">
          <select class="form-control" placeholder="Rating" id="rating" #newRating>
            <option disabled></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-xs-4">
          <input class="form-control" placeholder="Calories" id="calories" #newCalories>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-xs-6">
          <input type="date" class="form-control" id="date" #newDate>
        </div>
      </div>
      <button (click)="addMeal(newName, newSource, newDetails, newRating, newCalories, newDate, newTime)" class="btn btn-success btn-lg">Submit</button>
    </form>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userSource: HTMLInputElement, userDetails: HTMLInputElement, userRating: HTMLSelectElement, userCalories: HTMLInputElement, userDate: HTMLInputElement, userTime: HTMLInputElement){
    var params: String[] = [userName.value, userSource.value, userDetails.value, userRating.value, userCalories.value, userDate.value];
    this.onSubmitNewMeal.emit(params);
    userName.value = "";
    userSource.value ="";
    userDetails.value ="";
    userRating.value ="";
    userCalories.value="";
    userDate.value="";
  }
}
