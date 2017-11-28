import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})

export class CustomFormMaterialModule {
}
