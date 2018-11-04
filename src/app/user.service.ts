import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class UserService{
  private isUserLoggedIn;
  private username;
  constructor() {
    this.isUserLoggedIn=false;
   }
    getuserloggedin()
    {
      return this.isUserLoggedIn;
    }
    setuserloggedin(){
      this.isUserLoggedIn=true;
    }
}
