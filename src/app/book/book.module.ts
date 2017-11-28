import {
  MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatListModule,
  MatSlideToggleModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {EditBookComponent} from './edit-book/edit-book.component';
import {NgModule} from '@angular/core';
import {BookService} from '../services/book.service';
import {UploadImageService} from '../services/upload-image.service';
import {BookListComponent, DialogOverviewComponent} from './book-list/book-list.component';
import {MatTableModule} from '@angular/material/table';
import { ViewBookComponent } from './view-book/view-book.component';
import {BookRoutingModule} from './book-routing.module';
import {CustomFormMaterialModule} from '../shared/custom-form-material.module';

@NgModule({
  declarations: [
    EditBookComponent,
    BookListComponent,
    ViewBookComponent,
    DialogOverviewComponent
  ],
  entryComponents: [
    DialogOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    CustomFormMaterialModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    BookRoutingModule
  ],
  exports: [],
  providers: [
    BookService,
    UploadImageService
  ]
})

export class BookModule {}
