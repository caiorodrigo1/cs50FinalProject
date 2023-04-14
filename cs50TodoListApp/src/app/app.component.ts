import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app/user/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cs50TodoListApp';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    if (!this.loginService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
