import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule
  ]
})

export class  CustomToolbarMaterialModule {
}
