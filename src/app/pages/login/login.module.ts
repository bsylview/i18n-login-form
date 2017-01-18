import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { LocalizeRouterModule } from 'localize-router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { AlertComponent } from '../../directives/alert.component';

let routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule,
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, AlertComponent]
})
export class LoginModule { }
