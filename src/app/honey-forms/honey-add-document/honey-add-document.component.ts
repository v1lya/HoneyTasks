import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators,} from '@angular/forms';
import {HoneyStateService} from '../../honey-state.service';
import {IDoc, IImage} from '../models';
import {HoneyFormsService} from '../honey-forms.service';

export const PDF_EXTENSION = 'pdf';
export const PDF_IMG_PATH = './assets/pdf.png';

@Component({
  selector: 'app-honey-add-document',
  templateUrl: './honey-add-document.component.html',
  styleUrls: ['./honey-add-document.component.scss'],
})
export class HoneyAddDocumentComponent implements OnInit {
  @Input() isAddDocumentDialogOpened = false;
  @Output() dialogClosed = new EventEmitter<void>();
  uploadForm!: UntypedFormGroup;
  minExpirationDate!: Date;

  constructor(
    public state: HoneyStateService,
    private honeyFormsService: HoneyFormsService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initCalendar();
  }

  handleSubmit(): void {
    const value: Partial<IDoc> = this.uploadForm.value;
    const license: IDoc = {
      id: Date.now(),
      licenseCopy: {
        ...value.licenseCopy as IImage,
        content: this.getContent(value.licenseCopy as IImage),
      },
      expirationDate: value.expirationDate as Date,
      description: value.description as string,
    };
    this.state.isLoading = true;

    setTimeout(() => {
      this.honeyFormsService.addLicence(license);
      this.state.isLoading = false;
    }, 2000);

    this.dialogClosed.emit();
  }

  private initForm(): void {
    this.uploadForm = new UntypedFormGroup({
      licenseCopy: new UntypedFormControl('', {
        validators: [Validators.required],
      }),
      expirationDate: new UntypedFormControl('', {
        validators: [Validators.required],
      }),
      description: new UntypedFormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  private initCalendar(): void {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minExpirationDate = tomorrow;
  }

  private getContent(licenseCopy: IImage): string {
    const extension = licenseCopy?.fileType?.split('/').pop();
    return extension === PDF_EXTENSION ? PDF_IMG_PATH : licenseCopy.content;
  }
}
