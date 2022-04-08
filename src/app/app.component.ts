import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  loginForm!: FormGroup;
  submitForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      'name': new FormControl('Enter your name', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
      ])
    })
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });

    this.submitForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  submit(){
    this.submitted = true;
    this.submitForm.markAllAsTouched();
  }

  changeValue() {
    this.submitted = false;
  }

  title = 'forms-validations';
}

