import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SignupData } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordTwo: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  submitSignup(): void {
    if (this.signupForm.valid) {
      const data: SignupData = { ...this.signupForm.value };
      this.authService.signup(data).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const pw = form.get('password');
    const pw2 = form.get('passwordTwo');
    return pw && pw2 && pw.value && pw2.value && pw.value !== pw2.value ? { passwordMatch: true } : null;
  }

}
