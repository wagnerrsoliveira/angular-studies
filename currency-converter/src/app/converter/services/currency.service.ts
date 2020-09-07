import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencies: Currency[];

  constructor() { }

  private currenciesObj = [ //http://fixer.io
    { "symblo": "AUD", "description": "Dólar australiano" },
    { "symblo": "BGN", "description": "Lev búlgaro" },
    { "symblo": "BRL", "description": "Real brasileiro" },
    { "symblo": "CAD", "description": "Dólar canadense" },
    { "symblo": "CHF", "description": "Franco suíço" },
    { "symblo": "CNY", "description": "Yuan Chinês" },
    { "symblo": "CZK", "description": "Coroa República Tcheca" },
    { "symblo": "DKK", "description": "Coroa dinamarquesa" },
    { "symblo": "EUR", "description": "Euro" },
    { "symblo": "GBP", "description": "Libra Esterlina" },
    { "symblo": "HKD", "description": "Dólar de Hong Kong" },
    { "symblo": "HRK", "description": "Coroa Croácia" },
    { "symblo": "HUF", "description": "Florim húngaro" },
    { "symblo": "IDR", "description": "Rupia indonésia" },
    { "symblo": "ILS", "description": "Novo shekel israelense" },
    { "symblo": "INR", "description": "Rupia indiana" },
    { "symblo": "JPY", "description": "Iene japonês" },
    { "symblo": "KRW", "description": "Won sul-coreano" },
    { "symblo": "MXN", "description": "Peso mexicano" },
    { "symblo": "MYR", "description": "Malásia Ringgit" },
    { "symblo": "NOK", "description": "Coroa Noruega" },
    { "symblo": "NZD", "description": "Dólar da Nova Zelândia" },
    { "symblo": "PHP", "description": "Peso filipino" },
    { "symblo": "PLN", "description": "Złoty Polónia" },
    { "symblo": "RON", "description": "Leu romeno" },
    { "symblo": "RUB", "description": "Belarus Ruble" },
    { "symblo": "SEK", "description": "Coroa Suécia" },
    { "symblo": "SGD", "description": "Dólar de Singapura" },
    { "symblo": "THB", "description": "Baht Tailândia" },
    { "symblo": "TRY", "description": "Lira turca" },
    { "symblo": "USD", "description": "Dólar dos Estados Unidos" }, 
    { "symblo": "ZAR", "description": "Rand África do Sul" }
    ];
   

    listAll(): Currency[] {
      if (this.currencies) {
        return this.currencies;
      } 
      
      this.currencies = [];
  
      for (let currencyObj of this.currenciesObj) {
        let currency: Currency = new Currency();
        Object.assign(currency, currencyObj);
        this.currencies.push(currency);
      }
  
      return this.currencies;
    }
}

