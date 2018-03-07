import { TaskMockDataService } from './test-code/parent-child-component/task-mock-data.service';
import { LoggerService } from './logger.service';
import { IBill } from './test-code/billrequest.interface';
import { DATA_TEST_SERVER } from './test-code/global-variables';
import { Component } from '@angular/core';
import { ICurrentChildItemData } from './test-code/parent-child-component/parent-child.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  highlightColors:Array<string> = ["yellow","magenta"];

  //MockDataService
   taskDataList: ICurrentChildItemData[]= [];


  
     
  constructor(private logger:LoggerService,mockDataService:TaskMockDataService){

       mockDataService.getMockData().then((list:ICurrentChildItemData[])=>{
          this.taskDataList=list;
          console.log('Data retrieved');



       }).catch((err)=>{});
       console.log(DATA_TEST_SERVER);
  }

  //Event (Item clicked)
  billItemClicked(item:IBill){
     //console.log(`Event: ${item.br.bill_name}`);
    
     //this.logger.logBill(item);
     this.logger.logBillWithMessage("Item clicked from main component:",item);



  }




}
