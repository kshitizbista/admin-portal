import {Injectable} from '@angular/core';

@Injectable()
export class UploadImageService {

  constructor() {
  }

  uploadImage(bookId: number, fileToUpload: Array<File>) {
    this.makeFileRequest('http://localhost:8181/book/add/image?id=' + bookId, fileToUpload)
      .then((result) => {
      console.log(result);
      }, (error) => {
        console.log(error);
      });
  }

  modifyImage(bookId: number, fileToUpload: Array<File>) {
    if (fileToUpload.length > 0) {
      this.makeFileRequest('http://localhost:8181/book/update/image?id=' + bookId, fileToUpload)
        .then((result) => {
          console.log(result);
        }, (error) => {
          console.log(error);
        });
    }
  }

  makeFileRequest(url: string, files: Array<File>) {
    let formData: any;
    let xhr;
    return new Promise(
      (resolve, reject) => {
        formData = new FormData();
        xhr = new XMLHttpRequest();
        for (let i = 0; i < files.length; i++) {
          formData.append('uploads[]', files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('image successfully uploaded');
            }
          } else {
            reject(xhr.response);
          }
        };
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Auth-Token', localStorage.getItem('xAuthToken'));
        xhr.send(formData);
      }
    );
  }
}
