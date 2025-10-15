import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';

import { App } from './app';

import { Nopagefound } from './pages/nopagefound/nopagefound';



import { PagesModule } from './pages/pages-module';
import { AuthModule } from './auth-module';

@NgModule({
  declarations: [
    App,
    Nopagefound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
