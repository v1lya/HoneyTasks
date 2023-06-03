import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyListenerComponent } from './honey-listener.component';

describe('HoneyListenerComponent', () => {
  let component: HoneyListenerComponent;
  let fixture: ComponentFixture<HoneyListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyListenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
