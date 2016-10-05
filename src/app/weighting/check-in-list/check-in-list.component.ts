import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeightingCar, WeightingService } from '../weighting.service';


@Component({
  selector: 'app-check-in-list',
  templateUrl: './check-in-list.component.html',
  styleUrls: ['./check-in-list.component.css']
})
export class CheckInListComponent implements OnInit {

  private listWeightIn: Object[];
  private weightInLenth: number;

  // @Input('refresh') isRefresh: boolean;
  @Output() select: EventEmitter<Object> = new EventEmitter(true);

  constructor(private _weightingService: WeightingService) { }

  ngOnInit() {
    this.getListWeightIn();
  }

  onSelect(_weightingIn: WeightingCar) {
    this.select.emit(_weightingIn);
  }

  getListWeightIn() {
    this._weightingService.getListWeightingIn()
      .then(listWeightIn => this.listWeightIn = listWeightIn);

    this._weightingService.getLength()
      .then(length => this.weightInLenth = length);
  }


}
