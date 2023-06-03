import { Component } from '@angular/core';

@Component({
  selector: 'app-honey-subjects',
  templateUrl: './honey-subjects.component.html',
  styleUrls: ['./honey-subjects.component.scss']
})
export class HoneySubjectsComponent {
  isHistoryDialogOpened = false;

  constructor() {}

  toggleHistoryDialog(event: boolean): void {
    this.isHistoryDialogOpened = event;
  }

  closeHistory(): void {
    this.isHistoryDialogOpened = false;
  }
}
