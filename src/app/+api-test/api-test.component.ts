import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiTestService } from './api-test.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css'],
  
})
export class ApiTestComponent implements OnInit {
  greetings = '';
  constructor(private _appService:ApiTestService) { 
    
  }

  ngOnInit(): void {
    this._appService.sayHello()
      .subscribe(
      result => {
        this.greetings = result;
      }
      );
  }

}
