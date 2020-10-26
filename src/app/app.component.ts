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
 result:number;
 cError:string;
 doCalc(){
    if(this.firstOperand!=null&&this.secondNumber!=null&&this.operator!=null){
      if(this.operator=="-")
      {
        this.result= this.firstOperand-this.secondNumber;
       this.cError="нет ошибки" ;
      }
      else if(this.operator=="+"){
        this.result= this.firstOperand+this.secondNumber;
        this.cError="нет ошибки" ;
      }
      else if(this.operator=="/"){
        if(this.secondNumber==0){
          this.cError="на 0 делить нельзя";
          this.result=null;
        }
        else{
          this.result=this.firstOperand/this.secondNumber;
          this.cError="нет ошибки";
        }
      }else if(this.operator=="*"){
        this.result=this.firstOperand*this.secondNumber;
        this.cError="нет ошибки";

        }
      }else{
        if(this.firstOperand==null){
          this.cError="нет первого операнта";
        }
        else if(this.secondNumber==null){
          this.cError="нет второго операнта";
        }
        else if(this.operator==null){
          this.cError="нет оператора действий ";
        }
        

      }

  }
}

