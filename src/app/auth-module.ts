import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { Register } from './register/register';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared-module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [    
    Login,
    Register],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class AuthModule { }
