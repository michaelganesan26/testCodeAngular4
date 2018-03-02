import { LoggerService } from './../../logger.service';
import { IBill, IBillRequest } from './../billrequest.interface';
import { MockDataService } from './../mock-data.service';

import { NgForOf, NgIf, NgSwitchCase } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-event-driven',
  templateUrl: './event-driven.component.html',
  styleUrls: ['./event-driven.component.css']
})
export class EventDrivenComponent implements OnInit {

  //variables
  @Output() dataMouseClick: EventEmitter<IBill> = new EventEmitter();
  bills: IBill[];

  userName?: string = "";

  constructor(bills: MockDataService, private logMessage: LoggerService) {
    this.bills = bills.getBills();


  }

  ngOnInit() {
  }

  itemClicked(item: IBill) {
    this.logMessage.logBill(item);
    //Send the message to the parent
    this.dataMouseClick.emit(item);

  }

  trackUserName(): void {
    this.logMessage.log(this.userName);
  }

  onKeyUp(event: any) {

    console.log(event.target.value);
  }

  onKeyUpWithValue(data: string) {

    console.log(data);
  }

  onKeyUpEnter(data: string) {

    console.log(data);
  }




}