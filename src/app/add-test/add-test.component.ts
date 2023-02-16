import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApiService } from '../account-api.service';
import { Test } from '../models/test';
import { Option, TestQuestion } from '../models/test-question';
import { SpinnerService } from '../spinner.service';
import { TestEngineApiService } from '../test-engine-api.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent implements OnInit {

  constructor(private router: Router, 
    private accountApiService: AccountApiService, private testEngineApiService: TestEngineApiService,
    private spinnerService: SpinnerService) { }

  test: Test = new Test();
  testQuestions: TestQuestion[] = []
  isTestCreated: boolean = false;

  ngOnInit(): void {
    if(!this.accountApiService.isUserLoggedIn()){
      this.router.navigate(['/login'])
      return
    }
  }

  createTest() {
    console.log("Test being created is ", this.test)
    var spinnerRef = this.spinnerService.start("Test: "+this.test.title+" is being created")
    this.testEngineApiService.addTest(this.test).subscribe(
      result => {
        this.spinnerService.stop(spinnerRef);
        console.log("Add test response ", result)
        this.test.id = Number(result)
        this.isTestCreated = true;
        this.testQuestions.push(this.initializeQuestion());
      }, error => {
        this.spinnerService.stop(spinnerRef);
        console.log("Error adding test, with error ", error)
        this.isTestCreated = false;
      }
    )
  }

  cancel(){
    this.router.navigate(['/browse-tests'])
  }

  deleteQuestion(i: number) {
    this.testQuestions.splice(i, 1)
  }

  addQuestion(i: number) {
    console.log("Question being saved is ", this.testQuestions[i])
    var spinner = this.spinnerService.start("Question is being saved")
    this.testEngineApiService.addTestQuestion(this.test.id || 0, this.testQuestions[i]).subscribe(
      result=>{
        this.spinnerService.stop(spinner)
        console.log("Add ques success ", result)
        this.testQuestions.push(this.initializeQuestion());
      }, error=>{
        this.spinnerService.stop(spinner)
        console.log("Add ques failed ", error)
      }
    )
  }

  initializeQuestion(){
    var testQuestion = new TestQuestion();
    testQuestion.testId = this.test.id
    return testQuestion;
  }

  completeTest(){
    this.router.navigate(['/browse-tests'])
  }

  changeQuestionType(i: number){
    if(i<0 || i>this.testQuestions.length-1){
      return
    }
    if(this.testQuestions[i].type==='objective'){
      this.testQuestions[i].options = []
      this.testQuestions[i].options?.push(new Option())
      this.testQuestions[i].options?.push(new Option())
      this.testQuestions[i].options?.push(new Option())
      this.testQuestions[i].options?.push(new Option())
    }else{
      this.testQuestions[i].options = []
    }
  }

  disableCreateTest(){
    return !this.test || this.isItNull(this.test.title) 
      || this.isItNull(this.test.subject) || this.isItNull(this.test.targetedClass) || this.isItNull(this.test.difficultyLevel)
  }

  isItNull(val: any){
    return !val || val===''
  }

}
