import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { Login } from './login/login';
import { Register } from './register/register';
import { Nopagefound } from './pages/nopagefound/nopagefound';
import { Dashboard } from './pages/dashboard/dashboard';
import { Breadcrumbs } from './shared/breadcrumbs/breadcrumbs';
import { Sidebar } from './shared/sidebar/sidebar';
import { Header } from './shared/header/header';
import { Progress } from './pages/progress/progress';
import { Grafica1 } from './pages/grafica1/grafica1';
import { Pages } from './pages/pages/pages';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Nopagefound,
    Dashboard,
    Breadcrumbs,
    Sidebar,
    Header,
    Progress,
    Grafica1,
    Pages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
