import { CurrencyapidataService } from './../currencyapidata.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent {
  
  exchangeRate: number = 0;
  result: number = 0;
  title = `currencycalculator`;
  currjson: any = [];
  base = `USD`;  
 
  changebase(a:string){
    this.base = a;
    console.log(this.base)
  }

  constructor(private currency: CurrencyapidataService) { }

  convert () {
    this.currency.getcurrencydata(this.base).subscribe(data => {
     this.currjson = JSON.stringify(data);
     this.currjson = JSON.parse(this.currjson)
     console.log(this.currjson);
     this.result = this.currjson.exchangeRate
    }) 
  }       
  
  // showDateTime() {
  //   const now = new Date();
  //   const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
  //   const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
  //   const year = now.getFullYear();
  //   const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  //   const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  //   const dateTimeString = `${day}/${month}/${year} - ${hour}h${minute}`;
  //   const paragraphElement = document.getElementById("datetime-paragraph");
  //   if (paragraphElement !== null) {
  //     paragraphElement.textContent = dateTimeString;
  //   }
  // }
}


