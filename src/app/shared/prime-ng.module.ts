import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {ProgressSpinnerModule} from "primeng/progressspinner";

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
    ProgressSpinnerModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
    ProgressSpinnerModule
  ],
})
export class PrimeNgModule {
}
