import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-honey-dialog',
  templateUrl: './honey-dialog.component.html',
  styleUrls: ['./honey-dialog.component.scss']
})
export class HoneyDialogComponent {
  @Input() visible = false;
  @Input() headerText = '';
  @Output() dialogClosed = new EventEmitter<void>();

  closeDialog(): void {
    this.dialogClosed.emit();
  }
}
