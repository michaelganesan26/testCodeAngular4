import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvDemoComponent } from './prov-demo.component';

describe('ProvDemoComponent', () => {
  let component: ProvDemoComponent;
  let fixture: ComponentFixture<ProvDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
