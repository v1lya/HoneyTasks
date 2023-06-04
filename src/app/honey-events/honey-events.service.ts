import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HoneyEventsService {
  buttonClicked = new ReplaySubject<number>(5);
}
