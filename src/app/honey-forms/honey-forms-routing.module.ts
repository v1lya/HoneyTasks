import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoneyFormsComponent } from './honey-forms.component';

const routes: Routes = [{ path: '', component: HoneyFormsComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoneyFormsRoutingModule {}
