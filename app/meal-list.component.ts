import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealComponent} from './edit-meal.component';
import { NewMealComponent} from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';
import { DatePipe } from './date.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealComponent, NewMealComponent],
  pipes: [CaloriesPipe, DatePipe],
  template:`
  <div class= "row">
    <div class="col-sm-3 col-sm-offset-2">
      <h3 class="selected">View Meals by Date</h3>
      <input (change)="onChangeDate($event.target.value)" class="filter form-control" type="date" value="mm/dd/yyyy">
    </div>
    <div class="col-sm-2">
      <h3 class="center"> and/or </h3>
    </div>
    <div class="col-sm-3">
      <h3 class="selected">View Meals by Calories</h3>
      <select (change)="onChange($event.target.value)" class="filter form-control form-control-lg">
        <option value="all" selected="selected">Show all meals</option>
        <option value="low-calorie">Show meals with less than 500 calories</option>
        <option value="high-calorie">Show meals with more than 500 calories</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-5 col-sm-offset-1">
    <br>
      <meal-display  *ngFor="#currentMeal of mealList | date:selectedDate | calories:filterCalories" (click)="mealClicked(currentMeal)" [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal">
      </meal-display>
    </div>
    <div class="col-sm-6">
      <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal>
    </div>
  </div>
  <br>
  <div class="well row">
    <div class="col-sm-6 col-sm-offset-3">
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    </div>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  public selectedDate: string = "mm/dd/yyyy";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(params: string[]): void {
    this.mealList.push(new Meal(params[0], params[1], params[2], parseFloat(params[3]), parseFloat(params[4]), params[5], this.mealList.length));
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
  onChangeDate(optionFromCalendar) {
    this.selectedDate = optionFromCalendar;
  }
}
