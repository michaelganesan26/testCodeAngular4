import { Injectable } from '@angular/core';
import { IBill, IBillRequest } from "./billrequest.interface";

@Injectable()
export class MockDataService {
  bills: IBill[] = [{
    "br_num": 1,
    "br": {
      "bill_name": "HB 33/GA",
      "draft_id": 59867,
      "draft_doc_id": 4131,
      "bdweb_published_updated": "2018-02-09T13:44:51.843"
    }
  },
  {
    "br_num": 2,
    "br": {
      "bill_name": "HB 22/GA",
      "draft_id": 58131,
      "draft_doc_id": 2410,
      "bdweb_published_updated": "2018-01-17T17:39:46.127"
    }
  },
  {
    "br_num": 2,
    "br": {
      "bill_name": "HB 22/SCS 1",
      "draft_id": 61051,
      "draft_doc_id": 5314,
      "bdweb_published_updated": "2018-02-22T18:29:53.273"
    }
  },
  {
    "br_num": 3,
    "br": {
      "bill_name": "SB 3/SCS 1",
      "draft_id": 57707,
      "draft_doc_id": 1992,
      "bdweb_published_updated": "2018-01-10T18:29:03.660"
    }
  },
  {
    "br_num": 3,
    "br": {
      "bill_name": "SB 3/GA",
      "draft_id": 57722,
      "draft_doc_id": 2007,
      "bdweb_published_updated": "2018-01-10T18:29:03.630"
    }
  }];

  constructor() { 
      //  console.log("The constructor for the mock data service is called!");
      //  console.log(this.bills);

  }


    getBills():IBill[] {

        return(this.bills);
   }

}







