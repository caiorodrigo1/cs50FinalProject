import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router
  ) {
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void {}

  public criarFormLogin(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public submitForm() {
    const { email, password } = this.formLogin.value;
    this.formLogin.reset;

    this.loginService.login(email, password).subscribe(
      (res) => {
        this.route.navigate(['']);
      },
      (err) => {}
    );
  }
}
