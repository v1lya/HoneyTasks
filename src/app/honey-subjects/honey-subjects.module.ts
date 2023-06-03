import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimeNgModule} from '../shared/prime-ng.module';
import {HoneySubjectsComponent} from './honey-subjects.component';
import {HoneyButtonsComponent} from './honey-buttons/honey-buttons.component';
import {HoneyListenerComponent} from './honey-listener/honey-listener.component';
import {HoneyHistoryComponent} from './honey-history/honey-history.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HoneySubjectsComponent,
    HoneyButtonsComponent,
    HoneyListenerComponent,
    HoneyHistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule,
  ],
})
export class HoneySubjectsModule {
}
