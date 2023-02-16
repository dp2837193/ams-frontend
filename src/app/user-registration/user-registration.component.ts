import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApiService } from '../account-api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  newUser: User = {}
  showMessage: boolean = false;
  registrationSuccess: boolean = false;
  registrationFailureMsg: string = "";
  constructor(private router: Router, private accountApiService: AccountApiService) { }

  ngOnInit(): void {
    if(this.accountApiService.isUserLoggedIn()){
      this.router.navigate(['/browse-tests'])
    }
  }

  openLogin(){
    this.router.navigate(['/login']);
  }

  registerUser(){
    console.log("User being registered ", this.newUser)
    this.accountApiService.registerUser(this.newUser).subscribe(
      result => {
        this.showMessage = true
        this.registrationSuccess = true
        console.log("Result from registration ", result)
        this.router.navigate(['/login'])
      }, error => {
        this.showMessage = true
        this.registrationSuccess = false
        this.registrationFailureMsg = error.error
        console.log("Failed to register, with error ", error)
      }
    )
  }

}
