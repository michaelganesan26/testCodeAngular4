import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-hambuger-icon',
  templateUrl: './hambuger-icon.component.html',
  styleUrls: ['./hambuger-icon.component.css']
})
export class HambugerIconComponent implements OnInit {

  @ViewChild('navIcon1') navIcon1: ElementRef;
  @ViewChild('navIcon2') navIcon2: ElementRef;
  @ViewChild('navIcon3') navIcon3: ElementRef;
  @ViewChild('navIcon4') navIcon4: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  navIcon_OpenClickAll(navId: string) {

    let element: ElementRef;


    switch (navId) {
      case ("navIcon2"):
        element = this.navIcon2;
        break;
      case ("navIcon3"):
        element = this.navIcon3;
        break;
      case ("navIcon4"):
        element = this.navIcon4;
        break;
      case ("navIcon1"):
        element = this.navIcon1;
        break;
    }
     element.nativeElement.classList.toggle("open");

  }



}
