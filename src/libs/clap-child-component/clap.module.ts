import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClapComponent } from './clap/clap.component';



@NgModule({
  declarations: [ClapComponent],
  imports: [
    CommonModule,FormsModule
  ]
})
export class ClapChildModule { }
