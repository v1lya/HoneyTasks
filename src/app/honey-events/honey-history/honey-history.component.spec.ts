import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyHistoryComponent } from './honey-history.component';

describe('HoneyHistoryComponent', () => {
  let component: HoneyHistoryComponent;
  let fixture: ComponentFixture<HoneyHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoneyHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoneyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
