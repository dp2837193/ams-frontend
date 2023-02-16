import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  loginKey: string = "userLoggedIn"
  loginUserDetailsKey: string = "userDetails"
  accountApiHost: string = "http://localhost:8001"

  constructor(private httpClient: HttpClient) { }

  getLoggedInUserDetails(): User {
    if(this.isUserLoggedIn()){
      return JSON.parse(localStorage.getItem(this.loginUserDetailsKey) || '{}');
    }
    return {}
  }

  isUserLoggedIn(): boolean{
    let loginValue = localStorage.getItem(this.loginKey)
    let loginUserDetails = localStorage.getItem(this.loginUserDetailsKey)
    if(!loginValue || loginValue!="true" || !loginUserDetails){
      return false;
    }
    return true;
  }

  clearUserData(){
    localStorage.removeItem(this.loginKey)
    localStorage.removeItem(this.loginUserDetailsKey)
  }

  registerUser(user: User) {
    let url = this.accountApiHost+'/register';
    return this.httpClient.post(url, user, {responseType: 'text'});
  }

  verifyUser(email: string, password: string): Observable<User> {
    let login = {
      "email" : email,
      "password" : password
    }
    let url = this.accountApiHost+'/login';
    return this.httpClient.post<User>(url, login);
  }
}
