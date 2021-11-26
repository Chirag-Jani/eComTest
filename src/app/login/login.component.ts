import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logIn: any = new FormGroup({
    mobile: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  signIn(mobile: any, password: any) {
    console.log(`mobile: ${mobile} password: ${password}`);
    this.logIn.reset({});
  }
}
