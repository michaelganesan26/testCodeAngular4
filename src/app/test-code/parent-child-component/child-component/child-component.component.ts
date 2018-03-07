import { LoggerService } from './../../../logger.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IToDo, ICurrentChildItemData, eTaskUpdateType } from '../parent-child.interface';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  //@Input('totalTask')totalCurrentTask: number;
  totalCurrentTask: number = 0;

  @Input()
  set totalTask(value: number) {

    this.totalCurrentTask = value;
    this.currentTask.item.id=value + 1;
  }

  get totalTask():number{

     return(this.totalCurrentTask);

  }

  @Input('currentTask') currentTask: ICurrentChildItemData = <ICurrentChildItemData>{
    event:null,
    item:{
    id: null,
    task_date: null,
    task_description: "",
    task_dueDate: null,
    task_additionalNotes: null}
  }

  @Output('taskAdded') taskToDo: EventEmitter<ICurrentChildItemData> = new EventEmitter();


  constructor(private logger: LoggerService) { }

  ngOnInit() {
    console.log("Total number of task: ", this.totalCurrentTask);

  }

  onSubmit(): void {

    this.taskToDo.emit(this.currentTask);

  }

  submitData(): void {

    this.logger.displayJSONData(this.currentTask);
    this.taskToDo.emit(this.currentTask);

  }




}
