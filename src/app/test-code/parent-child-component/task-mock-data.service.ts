import { Injectable } from '@angular/core';
import { IToDo, eTaskUpdateType, ICurrentChildItemData } from './parent-child.interface';

@Injectable()
export class TaskMockDataService {

  listOfTask: ICurrentChildItemData[] = [
      {event: 'Learn Angular 4',item:{
        id:1,
        task_date:new Date('03/01/2018'),
        task_description : 'Learn Angular 4',
        task_dueDate: '03/31/2018',
        task_additionalNotes: "Electronic Book: "
      }},
      {event: 'Learn RxJs',item:{
        id:2,
        task_date:new Date('03/01/2018'),
        task_description : 'Learn Reactive Programming',
        task_dueDate: '03/31/2018',
        task_additionalNotes: "Electronic Book: "
      }},
  ];


  constructor() { }

  getMockData():Promise<ICurrentChildItemData[]>{
      
      return new Promise((resolve,reject)=>{
             if(this.listOfTask.length>0){
                resolve(this.listOfTask);
             }
             else{
               reject("Sorry not valid Data is available");
             }
      });

  }
}
