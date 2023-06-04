import { Component, OnDestroy, OnInit } from '@angular/core';
import { HoneySubjectsService } from '../honey-subjects.service';
import { Observable, scan, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-honey-history',
  templateUrl: './honey-history.component.html',
  styleUrls: ['./honey-history.component.scss'],
})
export class HoneyHistoryComponent implements OnInit, OnDestroy {
  history$ = new Observable<number[]>();
  private unsubscribe$ = new Subject<void>();

  constructor(private subjectsService: HoneySubjectsService) {}

  ngOnInit(): void {
    this.history$ = this.subjectsService.buttonClicked.pipe(
      takeUntil(this.unsubscribe$),
      scan((acc: number[], curr: number) => [...acc, curr], [])
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
