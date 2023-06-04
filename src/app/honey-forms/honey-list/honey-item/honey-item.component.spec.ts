import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyItemComponent } from './honey-item.component';

describe('HoneyItemComponent', () => {
  let component: HoneyItemComponent;
  let fixture: ComponentFixture<HoneyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoneyItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoneyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
