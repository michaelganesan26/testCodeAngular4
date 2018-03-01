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
   
  constructor(){

       console.log(DATA_TEST_SERVER);
  }


}
