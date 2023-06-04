import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
  ],
})
export class PrimeNgModule {}
