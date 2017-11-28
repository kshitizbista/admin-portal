import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';


@Injectable()
export class LoginService {
   isLoggedIn = false;

  constructor(private http: Http, private router: Router) {}

  sendCredential(username: string, password: string) {
    const url = 'http://localhost:8181/token';
    const encodedCredential = username + ':' + password;
    const basicHeader = 'Basic ' + btoa(encodedCredential);
    const headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded',
       'Authorization' :  basicHeader});
  //  headers.append('Content-Type', 'application/x-wwww-form-urlencoded');
  //  headers.append('Authorization' ,  basicHeader);
    const opts = new RequestOptions({headers: headers});
    return this.http.get(url, opts).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('xAuthToken', res.json().token);
        this.isLoggedIn = true;
      },
      error => {
        console.log(error);
      });
  }

  checkSession() {
    const url = 'http://localhost:8181/checkSession';
    const headers = new Headers ({
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    const opts = new RequestOptions({headers: headers});
    return this.http.get(url, opts).subscribe(
      res => {
        this.isLoggedIn = true;
      },
      error => {
        this.isLoggedIn = false;
      }
    );
  }

  logOut() {
    const url = 'http://localhost:8181/user/logOut';
    const headers = new Headers ({
      'X-Auth-Token': localStorage.getItem('xAuthToken'),
    });
    const opts = new RequestOptions({headers: headers});
    return this.http.post(url, null, opts).subscribe(
      res => {
        this.isLoggedIn = false;
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }

  isAuthenticated() {
    return this.isLoggedIn !== false;
  }

}
