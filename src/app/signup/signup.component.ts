import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpValues: any = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  signUp(name: any, mobile: any, password: any) {
    // debugger;
    console.log(`name: ${name} mobile: ${mobile} password: ${password}`);
    this.signUpValues.reset({});
  }
}
