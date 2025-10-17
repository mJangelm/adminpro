import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incrementador } from './incrementador/incrementador';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Incrementador
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Incrementador
  ]
})
export class ComponentsModule { }
