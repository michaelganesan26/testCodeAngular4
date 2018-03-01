import { LoggerService } from './../../logger.service';
import { IBill, IBillRequest } from './../billrequest.interface';
import { MockDataService } from './../mock-data.service';

import { NgForOf, NgIf, NgSwitchCase } from '@angular/common';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-event-driven',
  templateUrl: './event-driven.component.html',
  styleUrls: ['./event-driven.component.css']
})
export class EventDrivenComponent implements OnInit {

  @Output("dataClicked") dataMouseClick: EventEmitter = new EventEmitter();
  bills:IBill[];
  constructor(bills: MockDataService,private logMessage:LoggerService) {
      this.bills = bills.getBills();


  }

  ngOnInit() {
  }

  itemClicked(item: IBill) {
     this.logMessage.logBill(item);

  }

}