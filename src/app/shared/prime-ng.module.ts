import {NgModule} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class PrimeNgModule { }
