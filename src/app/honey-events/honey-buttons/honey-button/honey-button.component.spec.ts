import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyButtonComponent } from './honey-button.component';

describe('HoneyButtonComponent', () => {
  let component: HoneyButtonComponent;
  let fixture: ComponentFixture<HoneyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
