import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  firstOperand: number;
  secondNumber: number;
  operatoR:string;
  operator: string;
  result: boolean|string;
  cError: string;
  
  doCalc() {
    if (!this.operator) {
      this.cError = "отсутсвует 2 оператор ";
      this.result = "Error";
      return;
    }
   

    
    else if (this.operatoR === "!") {
      if (this.operator === "&&") {
        this.result =  !Boolean(this.firstOperand && this.secondNumber);
        this.cError = "aaaaa ";
        return;

       
      }
      else {
        this.result = !Boolean(this.firstOperand || this.secondNumber);
        this.cError = "aaa";
        return;

      }
    }
    else {
      if (this.operator === "&&") {
        this.result = Boolean(this.firstOperand && this.secondNumber);
        this.cError = "aaaa";
        return;

      }
      else {
        this.result = Boolean(this.firstOperand || this.secondNumber);
        this.cError = "aaaa";
        return;

      }
  }
  }
  }

