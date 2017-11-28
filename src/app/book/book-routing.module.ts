import {RouterModule, Routes} from '@angular/router';
import {EditBookComponent} from './edit-book/edit-book.component';
import {NgModule} from '@angular/core';
import {ViewBookComponent} from './view-book/view-book.component';
import {BookListComponent} from './book-list/book-list.component';

const appRoutes: Routes = [
  {path: 'addBook', component: EditBookComponent},
  {path: 'bookList', component: BookListComponent},
  {path: 'viewBook/:id', component: ViewBookComponent},
  {path: 'editBook/:id', component: EditBookComponent}

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports : [RouterModule]
})

export class BookRoutingModule {}
