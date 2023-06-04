import { Component } from '@angular/core';

@Component({
  selector: 'app-honey-events',
  templateUrl: './honey-events.component.html',
  styleUrls: ['./honey-events.component.scss'],
})
export class HoneyEventsComponent {
  isHistoryDialogOpened = false;

  constructor() {}

  toggleHistoryDialog(event: boolean): void {
    this.isHistoryDialogOpened = event;
  }

  closeHistory(): void {
    this.isHistoryDialogOpened = false;
  }
}
