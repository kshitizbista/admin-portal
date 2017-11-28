import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  username: string;
  password: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.checkSession();
  }

  onSubmit() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.loginService.sendCredential(this.username, this.password);
  }

  isAuthenticated() {
    return this.loginService.isAuthenticated();
  }
}
