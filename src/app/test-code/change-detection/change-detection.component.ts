import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {

  firstname: string = 'Pascal';
  lastname: string = 'Precht';

  constructor() { }

  ngOnInit() {
  }

  changeName(): void {
    this.firstname = 'Brad';
    this.lastname = 'Green';
  }

}
