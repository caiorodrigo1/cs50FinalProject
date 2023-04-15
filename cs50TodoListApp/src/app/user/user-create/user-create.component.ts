import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
})
export class RegisterComponent implements OnInit {
  public formRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private route: Router
  ) {
    this.formRegister = this.criarFormRegister();
  }

  ngOnInit(): void {}

  public criarFormRegister(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public submitForm() {
    const { name, email, password } = this.formRegister.value;
    this.formRegister.reset;

    this.registerService.register(name, email, password).subscribe(
      (res) => {
        this.route.navigate(['login']);
      },
      (err) => {}
    );
  }
}
