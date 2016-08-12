import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealComponent} from './edit-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealComponent],
  template:`
  <div class= "row">
    <div class="col-sm-4 col-sm-offset-1">
      <meal-display  *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)" [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal">
      </meal-display>
    </div>
    <div class="col-sm-4 col-sm-offset-1">
      <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal>
    </div>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
