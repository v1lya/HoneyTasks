import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyDialogComponent } from './honey-dialog.component';

describe('HoneyDialogComponent', () => {
  let component: HoneyDialogComponent;
  let fixture: ComponentFixture<HoneyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoneyDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoneyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
