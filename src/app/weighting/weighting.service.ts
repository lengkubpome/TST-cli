import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export interface IWeightingCar {
  id: number,
  carId: string,
  product: string,
  price: number,
  weightIn: number,
  weightOut: number,
  dateIn: Date,
  dateOut: Date,
  cutWeightByUnit?: number,
  cutWeightByPercent?: number,
  customerId?: number
}

export class WeightingCar {
  constructor(
    public id: number,
    public carId: string,
    public product: string,
    public price: number,
    public weightIn: number,
    public weightOut: number,
    public dateIn: Date,
    public dateOut: Date,
    public cutWeightByUnit?: number,
    public cutWeightByPercent?: number,
    public customerId?: number



  ) { }
}

let ListWeightingCar: IWeightingCar[] = [
  { id: 1, carId: '9555', product: 'เหล็ก', price: 0, dateIn: null, dateOut: null, customerId: 0, weightIn: 8300, weightOut: 3020, cutWeightByPercent: null, cutWeightByUnit: null },
  { id: 2, carId: '9135', product: 'กระดาษสี', price: 0, dateIn: null, dateOut: null, customerId: 0, weightIn: 9000, weightOut: 3020, cutWeightByPercent: null, cutWeightByUnit: null },
  { id: 3, carId: '1818', product: 'กระดาษกล่อง', price: 0, dateIn: null, dateOut: null, customerId: 0, weightIn: 7090, weightOut: 3020, cutWeightByPercent: null, cutWeightByUnit: null },
  { id: 4, carId: '81-4920', product: 'สังกะสี', price: 0, dateIn: null, dateOut: null, customerId: 0, weightIn: 6300, weightOut: 3020, cutWeightByPercent: null, cutWeightByUnit: null }
];


@Injectable()
export class WeightingService {

  constructor() { }
  getListWeightingIn() {
    return Promise.resolve(ListWeightingCar); //ค่อยจัดการเรื่องจากส่งค่าเฉพาะรายการที่เป็น WeightIn อย่างเดียว 
    // return ListWeightingCar;
  }

  getLength() {
    return Promise.resolve(ListWeightingCar.length);
  }

  createWeightInCar(newCar: WeightingCar) {
    try {
      ListWeightingCar.push(
        new WeightingCar(1,
          newCar.carId,
          newCar.product,
          newCar.price,
          newCar.weightIn,
          newCar.weightOut,
          newCar.dateIn,
          newCar.dateOut,
          newCar.customerId));

      console.log('To created weight-In.');
    } catch (error) {
      return error;

    }


  }

  getWeightInCar(id: number) {
    // return listWeightingCarPromise
    //     .then(listWeightingCar => listWeightingCar
    //         .find(weightingCar => weightingCar.id ===+id));

  }

}

