

import { IBill, IBillRequest } from './../billrequest.interface';
import { MockDataService } from './../mock-data.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-listbills',
  templateUrl: './listbills.component.html',
  styleUrls: ['./listbills.component.css']
})
export class ListbillsComponent implements OnInit, AfterViewInit {

  bills: IBill[];


  constructor(private billsService: MockDataService) {

    this.bills = billsService.getBills().sort((a: IBill, b: IBill) => {
      if (Date.parse(a.br.bdweb_published_updated) >
        Date.parse(b.br.bdweb_published_updated)) {
        return (1);
      }
      else {
        if (Date.parse(a.br.bdweb_published_updated) <
          Date.parse(b.br.bdweb_published_updated)) {
          return (-1);
        }
      }
      return (0);

    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {



  }

}
