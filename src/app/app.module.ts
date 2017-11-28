import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {LoginModule} from './login/login.module';
import {CoreModule} from './core/core.module';
import {BookModule} from './book/book.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LoginModule,
    BookModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
