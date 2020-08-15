import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly ADDITION: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';
  
  constructor() { }

  calculate(firstNumber:number,secondNumber:number, operator:string): number{
    let result:number;

    switch (operator) {
      case CalculatorService.ADDITION:
        result = firstNumber + secondNumber;        
        break;
      case CalculatorService.SUBTRACTION:
        result = firstNumber - secondNumber;        
        break;
      case CalculatorService.DIVISION:
        result = firstNumber / secondNumber;
        break;
      case CalculatorService.MULTIPLICATION:
        result = firstNumber * secondNumber;        
        break;    
      default:
        result = 0;
    }

    return result;
  }
}
