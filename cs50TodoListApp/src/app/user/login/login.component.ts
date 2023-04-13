import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // public formLogin: FormGroup;

  // constructor(private fb: FormBuilder, private toast: ToastrService) {
  //   this.formLogin = this.createFormLogin();
  // }

  ngOnInit(): void {}

  // public createFormLogin(): FormGroup {
  //   return this.fb.group({
  //     email: ['', [Validators.required]],
  //     password: ['', [Validators.required]],
  //   });
  // }
}
