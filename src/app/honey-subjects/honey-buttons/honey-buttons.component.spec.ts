import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyButtonsComponent } from './honey-buttons.component';

describe('HoneyButtonsComponent', () => {
  let component: HoneyButtonsComponent;
  let fixture: ComponentFixture<HoneyButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
