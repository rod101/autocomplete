import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars: any[];

  selectedCar: string = 'BMW';

  partners: string[];

  constructor() {
      this.partners = ['None', 'Jet', 'Edgars'];

      this.cars = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'}
      ];

  }

}
