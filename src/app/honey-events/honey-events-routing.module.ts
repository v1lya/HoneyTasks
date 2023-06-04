import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoneyEventsComponent } from './honey-events.component';

const routes: Routes = [{ path: '', component: HoneyEventsComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoneyEventsRoutingModule {}
