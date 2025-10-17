import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { Progress } from './progress/progress';
import { Grafica1 } from './grafica1/grafica1';
import { Pages } from './pages';
import { SharedModule } from '../shared/shared-module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing-module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components-module';



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
    FormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
