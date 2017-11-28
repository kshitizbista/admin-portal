import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewBookComponent implements OnInit {

  private bookId: number;
  book: Book = new Book();
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookId = +params['id'];
      }
    );
    this.bookService.getBook(this.bookId).subscribe(
      (book: Book) => {
        this.book = book;
      }
    );
  }

  onSelect(book: Book) {
    this.router.navigate(['/editBook', book.id]);
  }
}
