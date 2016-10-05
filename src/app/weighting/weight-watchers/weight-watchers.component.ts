import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import {Observable} from 'rxjs/Observable';



export function createCounterRangeValidator(maxValue: any, minValue: any) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err : null;
  };
}

@Component({
  selector: 'app-weight-watchers',
  // templateUrl: './weight-watchers.component.html',
  template: `
      <input type="text" 
        class="form-control input-lg" 
        style="color:black; text-align: right;font-size: 35px; font-weight: bold;"  
        name="weight"
       
        [(ngModel)]="weight"
                  > 
    `,
  styleUrls: ['./weight-watchers.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WeightWatchersComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => WeightWatchersComponent), multi: true }
  ]
})
export class WeightWatchersComponent implements OnInit {

  weight: number;

  propagateChange: any = () => { };
  validateFn: any = () => { };

  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(0, 1000);
    timer.subscribe(() => {
      // this.weight = _.random(99999); <------------------------
      this.weight = 95555;
      this.propagateChange(this.weight);
    });
  }

  ngOnChanges(inputs: any) {
    // if (inputs.counterRangeMax || inputs.counterRangeMin) {
    //   this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    // }
  }

  writeValue(value: any) {
    if (value) {
      this.weight = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;

  }

  registerOnTouched() {

  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }


}
