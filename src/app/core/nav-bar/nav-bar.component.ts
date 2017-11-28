import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit  {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginService.checkSession();
  }

  onListBook() {
    this.router.navigate(['/bookList']);
  }

  onAddBook() {
    this.router.navigate(['/addBook']);
  }

  onLogOut() {
    this.loginService.logOut();
  }

  isAuthenticated() {
    return this.loginService.isAuthenticated();
  }
}
