import {
  CurrencyService,
  CurrentExchangeRateResponse,
  DailyExchangeRateResponse,
} from '../services/currency/currency.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css'],
})
export class CurrencyExchangeComponent {
  public baseCurrency: string | undefined = undefined;
  public currentExchangeRate: CurrentExchangeRateResponse | undefined;
  public dailyExchangeRate: DailyExchangeRateResponse[] = [];
  public showDailyExchangeRate: boolean = false;
  public dailyExchangeToggleText = '+';

  constructor(private currencyService: CurrencyService) {}

  async exchangeRate() {
    if (this.baseCurrency === undefined) return;

    this.currentExchangeRate = undefined;
    this.dailyExchangeRate = [];

    const response = await this.currencyService.getExchangeRateByCountry(
      this.baseCurrency.toUpperCase()
    );

    if (response.success) this.currentExchangeRate = response;
  }

  async toggleDailyExchangeRate() {
    this.showDailyExchangeRate = !this.showDailyExchangeRate;

    if (this.showDailyExchangeRate) {
      this.dailyExchangeToggleText = '-';
      this.getDailyExchangeRate();
    } else this.dailyExchangeToggleText = '+';
  }

  private async getDailyExchangeRate() {
    if (this.baseCurrency === undefined) return;

    this.dailyExchangeRate = [];

    const response = await this.currencyService.getDailyExchangeRate(
      this.baseCurrency.toUpperCase()
    );

    if (response.data?.length) {
      this.dailyExchangeRate = response.data?.slice(0, 30);
    }
  }
}
