import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoneySubjectsComponent } from './honey-subjects.component';
import { HoneyButtonsComponent } from './honey-buttons/honey-buttons.component';
import { HoneyListenerComponent } from './honey-listener/honey-listener.component';
import { HoneyHistoryComponent } from './honey-history/honey-history.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HoneySubjectsRoutingModule } from './honey-subjects-routing.module';

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
    RouterModule,
    HoneySubjectsRoutingModule,
  ],
})
export class HoneySubjectsModule {}
