import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { Progress } from './progress/progress';
import { Grafica1 } from './grafica1/grafica1';
import { Pages } from './pages';
import { SharedModule } from '../shared/shared-module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing-module';



@NgModule({
  declarations: [
    Dashboard,
    Progress,
    Grafica1,
    Pages
  ],
  exports: [
    Dashboard,
    Progress,
    Grafica1,
    Pages
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
