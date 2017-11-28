import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../models/book.model';
import {NgForm} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UploadImageService} from '../../services/upload-image.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {
  @ViewChild('bookForm') bookForm: NgForm;
  private book: Book ;
  editMode: boolean = false;
  private bookId: number;
  bookAdded: boolean = false;
  category: string;
  language: string;
  active: boolean;
  format: string;
  fileToUpload: Array<File> = [];

  constructor(public bookService: BookService, private router: Router, private uploadImageService: UploadImageService,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookId = params['id'];
        this.editMode = this.bookId != null;
        this.formInit();
      }
    );

  }

  fileChangeEvent(fileInput: any) {
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }

  formInit() {
    if (this.editMode) {
     this.bookService.getBook(this.bookId).subscribe(
        (book: Book) => {
          this.bookForm.form.patchValue(book);
        }
      )
    } else {
      this.language = 'english';
      this.active = true;
      this.format = 'paperback';
      this.category = 'Management';
    }
  }

  onSubmit() {
    this.book = new Book();
    this.book = this.bookForm.value;
    let bookId: number;

    if (this.editMode) {
      this.bookService.updateBook(this.book).subscribe(
        res => {
          this.bookAdded = true;
          bookId = JSON.parse(JSON.parse(JSON.stringify(res))._body).id;
          this.uploadImageService.modifyImage(bookId, this.fileToUpload);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.bookService.sendBook(this.book).subscribe(
        res => {
          this.bookAdded = true;
          bookId = JSON.parse(JSON.parse(JSON.stringify(res))._body).id;
          this.uploadImageService.uploadImage(bookId, this.fileToUpload);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  onClear() {
    this.bookForm.form.reset({
      'category': 'Management',
      'language': 'english',
      'active': true,
      'format': 'paperback'
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
