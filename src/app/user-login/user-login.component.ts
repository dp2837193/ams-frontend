import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApiService } from '../account-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  email: string = ""
  password: string = ""
  showMessage: boolean = false;
  loginSuccess: boolean = false;

  constructor(private router: Router, private accountApiService: AccountApiService) { }

  ngOnInit(): void {
    if(this.accountApiService.isUserLoggedIn()){
      this.router.navigate(['/browse-tests'])
    }
  }

  openRegistration(){
    this.router.navigate(['/register'])
  }

  disableLogin(){
    return !this.email || this.email=="" || !this.password || this.password==""
  }

  loginUser(){
    this.accountApiService.verifyUser(this.email, this.password).subscribe(
      result => {
        console.log("Login response ", result)
        this.showMessage = true;
        this.loginSuccess = true;
        localStorage.setItem(this.accountApiService.loginKey, "true")
        localStorage.setItem(this.accountApiService.loginUserDetailsKey, JSON.stringify(result))
        this.router.navigate(['/browse-tests'])
      }, error => {
        this.showMessage = true;
        this.loginSuccess = false;
        console.log("Login failed with error ", error)
        localStorage.setItem(this.accountApiService.loginKey, "false")
        localStorage.removeItem(this.accountApiService.loginUserDetailsKey)
      }
    )
  }
}
