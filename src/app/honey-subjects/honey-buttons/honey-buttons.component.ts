import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { HoneySubjectsService } from '../honey-subjects.service';

export interface IButton {
  label: string;
  value: number;
  style: string;
}

@Component({
  selector: 'app-honey-buttons',
  templateUrl: './honey-buttons.component.html',
  styleUrls: ['./honey-buttons.component.scss'],
})
export class HoneyButtonsComponent {
  buttonClicked = new Subject<number>();

  buttonsList: IButton[] = [
    { label: '1', value: 1, style: 'blue' },
    { label: '2', value: 2, style: 'blue' },
    { label: '3', value: 3, style: 'blue' },
    { label: '4', value: 4, style: 'blue' },
    { label: '5', value: 5, style: 'blue' },
    { label: '6', value: 6, style: 'blue' },
    { label: '7', value: 7, style: 'blue' },
    { label: '8', value: 8, style: 'blue' },
    { label: '9', value: 9, style: 'blue' },
  ];

  constructor(private subjectsService: HoneySubjectsService) {}

  handleButtonClick(value: number): void {
    this.subjectsService.buttonClicked.next(value);
  }
}
