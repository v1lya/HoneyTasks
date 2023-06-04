import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneySubjectsComponent } from './honey-subjects.component';

describe('HoneySubjectsComponent', () => {
  let component: HoneySubjectsComponent;
  let fixture: ComponentFixture<HoneySubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoneySubjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoneySubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
