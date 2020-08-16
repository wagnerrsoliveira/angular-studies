import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../services'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private firstNumber: string;
  private secondNumber: string;
  private result: number;
  private operation: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.clear();
  }

  clear(): void {
    this.firstNumber = '0';
    this.secondNumber = null;
    this.result = null;
    this.operation = null;
  }

  addNumber(number:string){
    if(this.operation===null){
      this.firstNumber = this.concatenateNumber(this.firstNumber,number);
    }else{
      this.secondNumber = this.concatenateNumber(this.secondNumber,number);
    }
  }

  concatenateNumber(currentNumber: string, concatenatorNumber: string): string {
    
    if(currentNumber === '0' || currentNumber ===null){
      currentNumber = '';
    }


    if(concatenatorNumber === '.' && currentNumber === ''){
      return '0.';
    }


    if(concatenatorNumber === '.' && currentNumber.indexOf('.') > -1){
      return currentNumber;
    }

    return currentNumber + concatenatorNumber;
  }

  defineOperation(operation:string):void {
    if(this.operation === null){
      this.operation = operation;
      return;
    }

    if(this.secondNumber !== null){
      this.result = this.calculatorService.calculate(
        parseFloat(this.firstNumber),
        parseFloat(this.secondNumber),
        this.operation);
      this.operation= operation;
      this.firstNumber = this.result.toString();
      this.secondNumber = null;
      this.result= null;
    }
  }

  calculate():void {
    if(this.secondNumber===null){
      return;
    }

    this.result =  this.result = this.calculatorService.calculate(
      parseFloat(this.firstNumber),
      parseFloat(this.secondNumber),
      this.operation);
  }

  get display():string {
    if(this.result  !== null){
      return this.result.toString();
    }
    if(this.secondNumber !== null){
      return this.secondNumber;
    }
    return this.firstNumber;
  }

}
