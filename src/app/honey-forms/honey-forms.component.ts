import { Component } from '@angular/core';
import {IDoc, IImage} from "./models";


@Component({
  selector: 'app-honey-forms',
  templateUrl: './honey-forms.component.html',
  styleUrls: ['./honey-forms.component.scss']
})
export class HoneyFormsComponent {
  isAddDocumentDialogOpened = false;
  docsList: IDoc[] = [];

  constructor() {}

  toggleAddDocumentDialog(event: boolean) {
    this.isAddDocumentDialogOpened = event;
  }

  handleSelectedFile(img: IImage) {

  }
}
