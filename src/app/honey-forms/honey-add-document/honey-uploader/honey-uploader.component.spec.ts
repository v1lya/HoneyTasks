import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyUploaderComponent } from './honey-uploader.component';

describe('HoneyUploaderComponent', () => {
  let component: HoneyUploaderComponent;
  let fixture: ComponentFixture<HoneyUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
