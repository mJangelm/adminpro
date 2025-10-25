import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './pages';
import { Dashboard } from './dashboard/dashboard';
import { Progress } from './progress/progress';
import { Grafica1 } from './grafica1/grafica1';
import { AccountSettings } from './account-settings/account-settings';
import { Promesas } from './promesas/promesas';
import { Rxjs } from './rxjs/rxjs';

const routes: Routes = [
    {path: 'dashboard', component: Pages,
  
    children: [
  
      {path: '', component: Dashboard, data: {titulo: 'Dashboard'}},
      {path: 'progress', component: Progress, data: {titulo: 'progress'}},
      {path: 'grafica1', component: Grafica1, data: {titulo: 'grafica1'}},
      {path: 'account-settings', component: AccountSettings, data: {titulo: 'settings'}},
      {path: 'promesas', component: Promesas, data: {titulo: 'promesas'}},
      {path: 'rxjs', component: Rxjs, data: {titulo: 'rxjs'}},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
