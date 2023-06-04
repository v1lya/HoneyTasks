import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoneySubjectsComponent } from './honey-subjects.component';

const routes: Routes = [{ path: '', component: HoneySubjectsComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoneySubjectsRoutingModule {}
