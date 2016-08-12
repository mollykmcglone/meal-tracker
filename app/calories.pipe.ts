import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe ({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalories = args[0];
    if(desiredCalories === "high-calorie") {
      return input.filter(function(meal){
        return (meal.calories >= 500);
      });
    } else if (desiredCalories === "low-calorie") {
      return input.filter(function(meal){
        return (meal.calories < 500);
      });
    } else {
      return input;
    }
  }
}
