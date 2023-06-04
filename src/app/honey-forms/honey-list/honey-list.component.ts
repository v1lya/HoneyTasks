import { Component, OnDestroy, OnInit } from '@angular/core';
import { HoneyFormsService } from '../honey-forms.service';
import { IDoc } from '../models';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-honey-list',
  templateUrl: './honey-list.component.html',
  styleUrls: ['./honey-list.component.scss'],
})
export class HoneyListComponent implements OnInit, OnDestroy {
  licenses$!: Observable<IDoc[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(public honeyFormsService: HoneyFormsService) {}

  ngOnInit(): void {
    this.licenses$ = this.honeyFormsService.listChanged.pipe(
      takeUntil(this.unsubscribe$)
    );
  }

  handleDeleteLicense(id: number) {
    this.honeyFormsService.deleteLicence(id);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
