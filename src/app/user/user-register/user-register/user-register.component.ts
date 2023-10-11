import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  registrationForm: FormGroup;

  constructor(){

  }

  ngOnInit(){
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, [Validators.required, Validators.email]),
      userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      userConfirmPassword: new FormControl(null, [Validators.required]),
      userMobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatching);
  }

  //getter methods for all controls
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get userEmail(){
    return this.registrationForm.get('userEmail') as FormControl;
  }
  get userPassword(){
    return this.registrationForm.get('userPassword') as FormControl;
  }
  get userConfirmPassword(){
    return this.registrationForm.get('userConfirmPassword') as FormControl;
  }
  get userMobile(){
    return this.registrationForm.get('userMobile') as FormControl;
  }

  passwordMatching(fg: FormGroup){
    return fg.get('userPassword').value === fg.get('userConfirmPassword').value ? null :
    {notmatched: true}
  }

  onSubmit(){
    console.log(this.registrationForm);
  }
}
