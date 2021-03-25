import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VieweventsComponent } from './viewevents.component';

describe('VieweventsComponent', () => {
  let component: VieweventsComponent;
  let fixture: ComponentFixture<VieweventsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VieweventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
