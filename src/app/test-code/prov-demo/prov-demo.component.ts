import { LoggerService } from './../../logger.service';
import { Component, OnInit } from '@angular/core';
import { MyClass } from '../MyClass';


@Component({
  selector: 'app-prov-demo',
  templateUrl: './prov-demo.component.html',
  styleUrls: ['./prov-demo.component.css']
})
export class ProvDemoComponent implements OnInit {
  time: Number;
  num: Number;
  name:string;

  constructor(myClass: MyClass,private logger:LoggerService) {
    this.time = myClass.time;
    this.num = myClass.num;
    this.name = myClass.name;
    console.log("ProvDemo Class", myClass.time, myClass.num, myClass.name);
  }

  ngOnInit() {
    this.logger.log("Initial startup!");
  }

  updateService():void{
      this.logger.log("Second Update!");




  }


}
