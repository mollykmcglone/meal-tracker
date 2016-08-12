import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealComponent} from './edit-meal.component';
import { NewMealComponent} from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealComponent, NewMealComponent],
  pipes: [CaloriesPipe],
  template:`
  <div class= "row">
    <div class="col-sm-4">
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="all" selected="selected">Show all meals</option>
        <option value="low-calorie">Show meals with less than 500 calories</option>
        <option value="high-calorie">Show meals with more than 500 calories</option>
      </select>
      <meal-display  *ngFor="#currentMeal of mealList | calories:filterCalories" (click)="mealClicked(currentMeal)" [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal">
      </meal-display>
    </div>
    <div class="col-sm-6 col-sm-offset-1">
      <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
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
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(params: string[]): void {
    this.mealList.push(new Meal(params[0], params[1], params[2], parseFloat(params[3]), parseFloat(params[4]), this.mealList.length));
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
