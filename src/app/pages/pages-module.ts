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
import { AppModule } from '../app-module';
import { NgChartsModule } from 'ng2-charts';
import { AccountSettings } from './account-settings/account-settings';
import { Promesas } from './promesas/promesas';
import {  HttpClientModule } from '@angular/common/http';
import { Rxjs } from './rxjs/rxjs';



@NgModule({
  declarations: [
    Dashboard,
    Progress,
    Grafica1,
    Pages,
    AccountSettings,
    Promesas,
    Rxjs
  ],
  exports: [
    Dashboard,
    Progress,
    Grafica1,
    Pages,
    AccountSettings,
    Rxjs
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    NgChartsModule,

  ]
})
export class PagesModule { }
