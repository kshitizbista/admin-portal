import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {CustomFormMaterialModule} from '../shared/custom-form-material.module';

@NgModule({
  declarations : [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MatGridListModule,
    CustomFormMaterialModule
  ],
  providers: []
})

export class LoginModule {}
