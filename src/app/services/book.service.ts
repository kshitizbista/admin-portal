
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Book} from '../models/book.model';
import 'rxjs/Rx';

@Injectable()
export class BookService {

  book: Book [];
  constructor(private http: Http) {}

  sendBook(book: Book) {
    const url = 'http://localhost:8181/book/add';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    const opts = new RequestOptions({headers: headers});
    return this.http.post(url, JSON.stringify(book), opts);
  }

  updateBook(book: Book) {
    const url = 'http://localhost:8181/book/update';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    const opts = new RequestOptions({headers: headers});
    return this.http.post(url, JSON.stringify(book), opts);
  }

  removeBook(bookId: number) {
    const url = 'http://localhost:8181/book/remove';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    const opts = new RequestOptions({headers: headers});
    return this.http.post(url, bookId, opts);
  }

  getBookList() {
    const url = 'http://localhost:8181/book/bookList';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    const opts = new RequestOptions({headers:  headers});
    return this.http.get(url, opts).map(
      res => {
        return res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  getBook(id: number) {
    const url = 'http://localhost:8181/book/'+id;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    const opts = new RequestOptions({headers:  headers});
    return this.http.get(url, opts).map(
      res => {
        return res.json();
      },
      error => {
        console.log(error);
      }
    );
  }
}
