import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyEventsComponent } from './honey-events.component';

describe('HoneySubjectsComponent', () => {
  let component: HoneyEventsComponent;
  let fixture: ComponentFixture<HoneyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoneyEventsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoneyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
