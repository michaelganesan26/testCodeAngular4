import { LoggerService } from './logger.service';
import { IBill } from './test-code/billrequest.interface';
import { DATA_TEST_SERVER } from './test-code/global-variables';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  highlightColors:Array<string> = ["yellow","magenta"];
   
  constructor(private logger:LoggerService){

       console.log(DATA_TEST_SERVER);
  }

  //Event (Item clicked)
  billItemClicked(item:IBill){
     //console.log(`Event: ${item.br.bill_name}`);
    
     //this.logger.logBill(item);
     this.logger.logBillWithMessage("Item clicked from main component:",item);



  }




}
