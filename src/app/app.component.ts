//importar dependencias 
import { StocksService, StockInterface}  from './services/stocks.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 /* title = 'app';
  //Declara una propiedad como un arreglo de acciones 
  stocks: Array<StockInterface>;

  constructor(service: StocksService){
    service.load(['AAPL']).subscribe(stocks => {
      //Una vez que se carga los datos los almacena en la propiedad stocks.
      this.stocks = stocks;
    });
  }*/
}
