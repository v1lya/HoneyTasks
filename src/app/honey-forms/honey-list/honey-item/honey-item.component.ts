import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IDoc} from '../../models';

@Component({
  selector: 'app-honey-item',
  templateUrl: './honey-item.component.html',
  styleUrls: ['./honey-item.component.scss'],
})
export class HoneyItemComponent {
  @Input() licence!: IDoc;
  @Output() licenseDeleted = new EventEmitter<number>();

  deleteLicence() {
    this.licenseDeleted.emit(this.licence.id);
  }
}
