import {Component, Input, OnInit} from '@angular/core';
import { HoneyEventsService } from '../honey-events.service';
import { Observable, scan, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-honey-listener',
  templateUrl: './honey-listener.component.html',
  styleUrls: ['./honey-listener.component.scss'],
})
export class HoneyListenerComponent implements OnInit {
  @Input() isHistoryDialogOpened = false;
  result$ = new Observable<number[]>();
  private unsubscribe$ = new Subject<void>();

  constructor(private subjectsService: HoneyEventsService) {}

  ngOnInit(): void {
    this.result$ = this.subjectsService.buttonClicked.pipe(
      takeUntil(this.unsubscribe$),
      scan((acc: number[], curr: number) => [...acc, curr], [])
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
