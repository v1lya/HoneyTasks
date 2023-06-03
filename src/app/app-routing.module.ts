import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HoneySubjectsComponent} from "./honey-subjects/honey-subjects.component";
import {HoneyFormsComponent} from "./honey-forms/honey-forms.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: "full"},
  {path: 'main', component: HoneySubjectsComponent},
  {path: 'events', component: HoneySubjectsComponent},
  {path: 'forms', component: HoneyFormsComponent},
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
