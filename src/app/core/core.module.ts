import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NgModule} from '@angular/core';
import {LoginService} from '../services/login.service';
import {CommonModule} from '@angular/common';
import {CustomToolbarMaterialModule} from '../shared/custom-toolbar-material.module';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    CustomToolbarMaterialModule,
    AppRoutingModule
  ],
  exports : [
    NavBarComponent,
    AppRoutingModule
  ],
  providers: [
    LoginService,
  ]
})

export class CoreModule {
}
