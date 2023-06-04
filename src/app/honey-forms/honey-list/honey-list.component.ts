import { Component, OnDestroy, OnInit } from '@angular/core';
import { HoneyFormsService } from '../honey-forms.service';
import { IDoc } from '../models';
import {finalize, Observable, Subject, takeUntil} from 'rxjs';
import {HoneyStateService} from "../../honey-state.service";

@Component({
  selector: 'app-honey-list',
  templateUrl: './honey-list.component.html',
  styleUrls: ['./honey-list.component.scss'],
})
export class HoneyListComponent implements OnInit, OnDestroy {
  licenses$!: Observable<IDoc[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(public honeyFormsService: HoneyFormsService, public state: HoneyStateService) {}

  ngOnInit(): void {
    this.state.isLoading = true;
    setTimeout(() => {
      this.licenses$ = this.honeyFormsService.listChanged.pipe(takeUntil(this.unsubscribe$));
      this.state.isLoading = false;
    }, 2000);
  }

  handleDeleteLicense(id: number) {
    this.honeyFormsService.deleteLicence(id);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
