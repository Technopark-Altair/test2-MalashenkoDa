import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GitarComponent } from './gitar/gitar.component';
import { TelekComponent } from './telek/telek.component';
import { RegComponent } from './reg/reg.component';
import { MainComponent } from './main/main.component';

const routes: Routes =[
  {path:"", component:MainComponent},
  {path:"gitar", component:GitarComponent},
  {path:"telek", component:TelekComponent},
  {path:"reg", component:RegComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule]

})
export class AppRoutingModule { }
