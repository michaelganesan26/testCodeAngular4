import { TaskMockDataService } from './test-code/parent-child-component/task-mock-data.service';
import { LoggerService } from './logger.service';
import { IBill } from './test-code/billrequest.interface';
import { DATA_TEST_SERVER } from './test-code/global-variables';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ICurrentChildItemData } from './test-code/parent-child-component/parent-child.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  highlightColors: Array<string> = ["yellow", "magenta"];

  //MockDataService
  taskDataList: ICurrentChildItemData[] = [];
  totalItems:number=0;




  constructor(private logger: LoggerService, mockDataService: TaskMockDataService,
  private ref:ChangeDetectorRef) {

    mockDataService.getMockData().then((list: ICurrentChildItemData[]) => {
      this.taskDataList = list;
      this.totalItems=list.length;
      console.log('Total Items: ', this.totalItems);
      this.ref.detectChanges(); //Force a change on item update
      //console.log('Data retrieved');
      //this.logger.displayJSONData(this.taskDataList);
    }).catch((err) => {
      console.log(`Error retrieving test data: ${err}`);
    });

    console.log(DATA_TEST_SERVER);

  }

  //Event (Item clicked)
  billItemClicked(item: IBill) {
    //console.log(`Event: ${item.br.bill_name}`);

    //this.logger.logBill(item);
    this.logger.logBillWithMessage("Item clicked from main component:", item);
  }

  //event on task added
  onTaskAdded(event:ICurrentChildItemData){
       this.taskDataList.push(event);
       this.totalItems = this.taskDataList.length;
       this.ref.detectChanges();
  }




}
