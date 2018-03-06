import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IToDo, ICurrentChildItemData, eTaskUpdateType } from '../parent-child.interface';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
  @Input('totalTask') totalCurrentTask: number;
  
  @Output('taskAdded') taskToDo: EventEmitter<IToDo> = new EventEmitter();
  
  currentTask: IToDo = <IToDo>{
    id: this.totalCurrentTask + 1,
    task_date: new Date(),
    task_description: "",
    task_dueDate: null,
    task_additionalNotes: null
  }

  ngOnInit() {


  }

  onSubmit(): void {

    this.taskToDo.emit(this.currentTask);

  }




}
