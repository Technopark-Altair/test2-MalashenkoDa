import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title='my-app';
 firstOperand:number;
 secondNumber:number;
 operator:string;
 result:string;
 cError:string;
 doCalc(){
    if(this.firstOperand!=null||this.secondNumber!=null||this.operator!=null){
   if(this.firstOperand<this.secondNumber){
     this.result="2 операнд больше";
   }
   else if(this.firstOperand>this.secondNumber){
    
    this.result="1 операнд больше";

   }
   else if(this.firstOperand=this.secondNumber){
     this.result="числа равны ";
   }
   else if(this.firstOperand==0&&this.secondNumber==0){
   this.result="числа равны";
   }
    }
    else {
      this.result="вы что-то не ввели";
    }

      }

  }


