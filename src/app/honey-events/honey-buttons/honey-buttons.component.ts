import {Component} from '@angular/core';
import {HoneyEventsService} from '../honey-events.service';

export interface IButton {
  label: string;
  value: number;
}

@Component({
  selector: 'app-honey-buttons',
  templateUrl: './honey-buttons.component.html',
  styleUrls: ['./honey-buttons.component.scss'],
})
export class HoneyButtonsComponent {
  buttonsList: IButton[] = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6},
    {label: '7', value: 7},
    {label: '8', value: 8},
    {label: '9', value: 9},
  ];

  constructor(private subjectsService: HoneyEventsService) {}

  handleButtonClick(value: number): void {
    this.subjectsService.buttonClicked.next(value);
  }
}
