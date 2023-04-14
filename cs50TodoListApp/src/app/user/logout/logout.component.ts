import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.logout(); // call the logout method on the login service
    this.router.navigate(['/login']); // navigate to the login page
  }
}
