import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';
import {MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
   private bookList: Book[];
   private selectedBook: Book;
   public allChecked: boolean;
   public displayedColumns = ['checkbox', 'title', 'author', 'listPrice', 'ourPrice', 'active', 'operation'];
   public dataSource: MatTableDataSource<Book>;
   private removeBookList: Book[] = new Array();

  constructor(private bookService: BookService, private router: Router,private dialog: MatDialog) { }

   ngOnInit() {
    this.getBookList();
   }

   getBookList() {
     this.bookService.getBookList().subscribe(
       (book: Book[]) => {
         this.bookList = book;
         this.dataSource = new MatTableDataSource<Book>(this.bookList);
       },
       error => {
         console.log(error);
       }
     );
   }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  updateSelected(checked: boolean) {
    if (checked){
      this.allChecked = true;
      this.removeBookList = this.bookList.slice()
    } else {
      this.allChecked = false;
      this.removeBookList = [] ;
    }
  }

  updateRemoveBookList(checked: boolean, book: Book) {
    if (checked) {
      this.removeBookList.push(book);
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(book),1);
    }
  }

  removeSelectedBooks() {
    let dialogRef = this.dialog.open(DialogOverviewComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if (result === 'yes') {
          for (let book of this.removeBookList) {
            this.bookService.removeBook(book.id).subscribe(
              res => {
              },
              error => {
              }
            );
          }
          location.reload();
        }
      }
    );
  }

  openDialogue(book: Book) {
    let dialogRef = this.dialog.open(DialogOverviewComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if (result === 'yes') {
          this.bookService.removeBook(book.id).subscribe(
            res => {
              console.log(res);
              this.getBookList();
            },
            error => {
              console.log(error);
            }
          );
        }
      }
    );
  }
}

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html'
})
export class DialogOverviewComponent {
  constructor(private dialogRef: MatDialogRef<DialogOverviewComponent>) {}

  onNoClick() {
    this.dialogRef.close('no')
  }

  onYesClick(){
    this.dialogRef.close('yes');
  }
}

