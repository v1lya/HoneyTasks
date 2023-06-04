import { Injectable } from '@angular/core';
import { IDoc, IImage } from './models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HoneyFormsService {
  private copy: IImage = {
    content: './assets/fe_with_no_be.jpg',
    fileName: '1st copy',
    fileType: '',
    fileSize: 0,
  };
  private licenses: IDoc[] = [
    {
      id: Date.now(),
      licenseCopy: this.copy,
      expirationDate: new Date(),
      description: 'Description',
    },
  ];

  listChanged = new BehaviorSubject<IDoc[]>(this.licenses);

  constructor() {}

  addLicence(license: IDoc): void {
    this.licenses = [...this.licenses, license];
    this.listChanged.next(this.licenses);
  }

  deleteLicence(id: number): void {
    this.licenses = this.licenses.filter((l) => l.id !== id);
    this.listChanged.next(this.licenses);
  }
}
