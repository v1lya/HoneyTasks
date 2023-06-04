import {
  Component,
  EventEmitter,
  forwardRef,
  OnDestroy,
  Output,
} from '@angular/core';
import { IImage } from '../../models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-honey-uploader',
  templateUrl: './honey-uploader.component.html',
  styleUrls: ['./honey-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HoneyUploaderComponent),
      multi: true,
    },
  ],
})
export class HoneyUploaderComponent implements ControlValueAccessor, OnDestroy {
  @Output() dialogClosed = new EventEmitter<void>();

  imageURL = '';
  fileName = '';
  acceptedTypes = 'image/*, .pdf';

  onChange = (img: IImage) => {};
  onTouch = () => {};

  constructor() {}

  writeValue(img: IImage): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  closeDialog(): void {
    this.resetImageData();
    this.dialogClosed.emit();
  }

  handleSelectedFile(event: any): void {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      if (typeof reader.result === 'string') {
        const img: IImage = {
          content: reader.result,
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
        };
        this.imageURL = img.content;
        this.fileName = img.fileName;
        this.onChange(img);
      }
    };
  }

  private resetImageData(): void {
    this.imageURL = '';
    this.fileName = '';
  }

  ngOnDestroy(): void {
    this.resetImageData();
  }
}
