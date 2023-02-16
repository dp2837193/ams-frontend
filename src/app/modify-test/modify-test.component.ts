import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApiService } from '../account-api.service';

@Component({
  selector: 'app-modify-test',
  templateUrl: './modify-test.component.html',
  styleUrls: ['./modify-test.component.scss']
})
export class ModifyTestComponent implements OnInit {

  constructor(private router: Router, private accountApiService: AccountApiService) { }

  ngOnInit(): void {
    if(!this.accountApiService.isUserLoggedIn()){
      this.router.navigate(['/login'])
      return
    }
  }

}
