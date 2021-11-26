import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userData = [{}];
  constructor() {}
  // registerUser(userInfo: any) {
  //   this.userData.push(userInfo);
  // }
}
