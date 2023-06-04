import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoneyEventsComponent } from './honey-events.component';
import { HoneyButtonsComponent } from './honey-buttons/honey-buttons.component';
import { HoneyListenerComponent } from './honey-listener/honey-listener.component';
import { HoneyHistoryComponent } from './honey-history/honey-history.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HoneyEventsRoutingModule } from './honey-events-routing.module';
import { HoneyButtonComponent } from './honey-buttons/honey-button/honey-button.component';

@NgModule({
  declarations: [
    HoneyEventsComponent,
    HoneyButtonsComponent,
    HoneyListenerComponent,
    HoneyHistoryComponent,
    HoneyButtonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HoneyEventsRoutingModule,
  ],
})
export class HoneyEventsModule {}
