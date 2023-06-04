import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HoneyStateService } from './honey-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HoneyTasks';

  constructor(
    private state: HoneyStateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.state.overlayContainer = this.document.getElementById(
      'overlay-container'
    ) as HTMLElement;
  }
}
