import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child-component/child1/child1.component';



@NgModule({
  declarations: [
    Child1Component
  ],
  imports: [
    CommonModule
  ]
})
export class ChildModule { }
