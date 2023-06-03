import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-honey-add-document',
  templateUrl: './honey-add-document.component.html',
  styleUrls: ['./honey-add-document.component.scss']
})
export class HoneyAddDocumentComponent implements OnInit {
  @Input() isAddDocumentDialogOpened = false;
  @Output() dialogClosed = new EventEmitter<void>();
  uploadForm!: UntypedFormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  handleSubmit() {
    const value = this.uploadForm.value;
    console.log(value);
    this.dialogClosed.emit();
  }

  private initForm(): void {
    this.uploadForm = new UntypedFormGroup({
      license: new UntypedFormControl(''),
      expirationDate: new UntypedFormControl('', {validators: [Validators.required]}),
      description: new UntypedFormControl('', {validators: [Validators.required]})
    })
  }
}
