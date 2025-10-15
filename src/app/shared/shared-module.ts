import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';



@NgModule({
  declarations: [
      Breadcrumbs,
    Sidebar,
    Header
  ],
  exports: [
        Breadcrumbs,
    Sidebar,
    Header
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
