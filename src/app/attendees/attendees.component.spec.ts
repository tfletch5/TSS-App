import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttendeesComponent } from './attendees.component';

describe('AttendeesComponent', () => {
  let component: AttendeesComponent;
  let fixture: ComponentFixture<AttendeesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
