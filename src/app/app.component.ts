import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApiService } from './account-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assessment Management System';
  userName: string = "";

  constructor(private accountApiServcie: AccountApiService, private router: Router){
  }

  ngOnInit(): void {
  }

  hasUserLoggedIn(): boolean{
    if(this.accountApiServcie.isUserLoggedIn()){
      this.userName = this.accountApiServcie.getLoggedInUserDetails().firstName || "";
      return true;
    }
    return false;
  }

  logoutUser(){
    this.accountApiServcie.clearUserData()
    this.router.navigate(['/login'])
  }
}
