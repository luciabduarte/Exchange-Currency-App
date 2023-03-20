import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {
  private readonly API_URL = 'https://api-brl-exchange.actionlabs.com.br/api/1.0';
  private readonly API_KEY = 'RVZG0GHEV2KORLNA';

  constructor(private http:HttpClient) { }

  getcurrencydata(country1:string) {
    console.log("pais", country1)
    let url= `${this.API_URL}/open/currentExchangeRate?apiKey=${this.API_KEY}&from_symbol=${country1}&to_symbol=BRL`
    return this.http.get(url);
  }  
}
