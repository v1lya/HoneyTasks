import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IButton} from "../honey-buttons.component";

@Component({
  selector: 'app-honey-button',
  templateUrl: './honey-button.component.html',
  styleUrls: ['./honey-button.component.scss']
})
export class HoneyButtonComponent {
  @Input() button!: IButton;
  @Output() buttonClicked = new EventEmitter<number>();
}
