import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './pages';
import { Dashboard } from './dashboard/dashboard';
import { Progress } from './progress/progress';
import { Grafica1 } from './grafica1/grafica1';

const routes: Routes = [
    {path: 'dashboard', component: Pages,
  
    children: [
  
      {path: '', component: Dashboard},
      {path: 'progress', component: Progress},
      {path: 'grafica1', component: Grafica1},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
