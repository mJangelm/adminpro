import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Nopagefound } from './pages/nopagefound/nopagefound';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth.routing-module';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: Nopagefound},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
