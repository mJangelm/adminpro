import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './login/login';
import { Register } from './register/register';
import { Progress } from './pages/progress/progress';
import { Grafica1 } from './pages/grafica1/grafica1';
import { Nopagefound } from './pages/nopagefound/nopagefound';
import { Pages } from './pages/pages/pages';

const routes: Routes = [
  {path: '', 
  component: Pages,

  children: [
    {path: 'dashboard', component: Dashboard},
    {path: 'progress', component: Progress},
    {path: 'grafica1', component: Grafica1},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  ]
},
     
  {path: 'register', component: Register},
  {path: 'login', component: Login},


  {path: '**', component: Nopagefound}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
