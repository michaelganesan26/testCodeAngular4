import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HambugerIconComponent } from './hambuger-icon.component';

describe('HambugerIconComponent', () => {
  let component: HambugerIconComponent;
  let fixture: ComponentFixture<HambugerIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HambugerIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HambugerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
