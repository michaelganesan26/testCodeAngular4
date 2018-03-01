import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  exportAs: "TestHelloWorld",
  encapsulation: ViewEncapsulation.Native
})
export class HelloWorldComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
