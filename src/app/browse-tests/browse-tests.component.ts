import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApiService } from '../account-api.service';
import { Test } from '../models/test';
import { TestEngineApiService } from '../test-engine-api.service';

@Component({
  selector: 'app-browse-tests',
  templateUrl: './browse-tests.component.html',
  styleUrls: ['./browse-tests.component.scss']
})
export class BrowseTestsComponent implements OnInit {

  tests: Test[] = []
  testsAvailable: boolean = false;
  constructor(private router: Router, 
    private accountApiService: AccountApiService,
    private testEngineApiService: TestEngineApiService) { }

  ngOnInit(): void {
    if(!this.accountApiService.isUserLoggedIn()){
      this.router.navigate(['/login'])
      return
    }
    this.fetchTests();
  }

  fetchTests(){
    this.testsAvailable = false;
    this.testEngineApiService.fetchAllTests().subscribe(
      result => {
        console.log("Fetched tests ", result)
        this.tests = result
        if(this.tests && this.tests.length>0){
          this.testsAvailable = true;
        }
      }, error => {
        console.log("Failed to fetch tests ",error)
        this.testsAvailable = false;
      }
    )
  }

  editTest(i: number){
    console.log("Editing test ", this.tests[i])
    this.router.navigate(['/add-test'])
  }

  newTest(){
    this.router.navigate(['/add-test'])
  }

}
