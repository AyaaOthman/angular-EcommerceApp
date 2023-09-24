import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      signUpName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      signUpEmail: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9.-_$@*!]{3,30}$'),
      ]),
      signUpPassword: new FormControl('', [
        Validators.required,

        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
        ),
      ]),
      repeatedPassword: new FormControl('', [Validators.required]),
    });
  }
  handelSignUpSubmit(signUpFormData: any) {
    console.log(signUpFormData);
  }
}
