import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { LocalizeRouterModule, StaticParserLoader, LocalizeParser } from 'localize-router';
import { MaterialModule } from '@angular/material';

import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '/assets/locales', '.json');
}

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoginModule
  ],
  exports: [RouterModule],
  providers:[
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
