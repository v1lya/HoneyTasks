import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyFormsComponent } from './honey-forms.component';

describe('HoneyFormsComponent', () => {
  let component: HoneyFormsComponent;
  let fixture: ComponentFixture<HoneyFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
