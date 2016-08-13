import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe ({
  name: "date",
  pure: false
})

export class DatePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredDate = args[0];
    var output: Meal[] = [];
    for (var i = 0; i < input.length; i++) {
      if(desiredDate === input[i].date) {
        output.push(input[i]);
      } else if(desiredDate === "mm/dd/yyyy") {
        output.push(input[i]);
      }
    }
    return output;
  }
}
