import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyAddDocumentComponent } from './honey-add-document.component';

describe('HoneyAddDocumentComponent', () => {
  let component: HoneyAddDocumentComponent;
  let fixture: ComponentFixture<HoneyAddDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyAddDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyAddDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
