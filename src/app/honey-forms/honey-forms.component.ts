import {Component} from '@angular/core';

@Component({
  selector: 'app-honey-forms',
  templateUrl: './honey-forms.component.html',
  styleUrls: ['./honey-forms.component.scss'],
})
export class HoneyFormsComponent {
  isAddDocumentDialogOpened = false;

  constructor() {
  }

  toggleAddDocumentDialog(event: boolean) {
    this.isAddDocumentDialogOpened = event;
  }
}
