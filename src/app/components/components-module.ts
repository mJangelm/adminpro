import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incrementador } from './incrementador/incrementador';
import { FormsModule } from '@angular/forms';
import { Dona } from './dona/dona';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    Incrementador,
    Dona
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule 
    
  ],
  exports: [
    Incrementador,
    Dona
  ]
})
export class ComponentsModule { }
