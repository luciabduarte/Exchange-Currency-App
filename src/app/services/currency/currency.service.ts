import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface CurrentExchangeRateResponse {
  success: boolean;
  fromSymbol: string;
  lastUpdatedAt: string;
  toSymbol: string;
  exchangeRate: number;
}

export interface DailyExchangeRateResponse {
  close: number;
  high: number;
  low: number;
  open: number;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getExchangeRateByCountry(code: string) {
    const url = `${environment.currencyApi.url}/open/currentExchangeRate?apiKey=${environment.currencyApi.key}&from_symbol=${code}&to_symbol=BRL`;
    const currentExchangeRate$ =
      this.http.get<CurrentExchangeRateResponse>(url);

    return lastValueFrom(currentExchangeRate$);
  }

  getDailyExchangeRate(code: string) {
    const url = `${environment.currencyApi.url}/open/dailyExchangeRate?apiKey=${environment.currencyApi.key}&from_symbol=${code}&to_symbol=BRL`;
    const dailyExchangeRate$ = this.http.get<{
      data: DailyExchangeRateResponse[];
    }>(url);

    return lastValueFrom(dailyExchangeRate$);
  }
}
