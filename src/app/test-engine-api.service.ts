import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './models/test';
import { TestQuestion } from './models/test-question';

@Injectable({
  providedIn: 'root'
})
export class TestEngineApiService {
  testEngineApiHost: string = "http://localhost:8000"

  constructor(private httpClient: HttpClient) { }

  addTest(test: Test) {
    let url = this.testEngineApiHost+"/test"
    return this.httpClient.post(url, test, {responseType: 'text'})
  }

  addTestQuestion(testId: number, testQuestion: TestQuestion){
    let url = this.testEngineApiHost+'/test/'+testId+'/question'
    return this.httpClient.post(url, testQuestion, {responseType: 'text'})
  }

  fetchAllTests(): Observable<Test[]>{
    let url = this.testEngineApiHost+'/test'
    return this.httpClient.get<Test[]>(url)
  }
}
