import {NgModule} from "@angular/core";
import {HoneyDialogComponent} from "./honey-dialog/honey-dialog.component";
import {CommonModule} from "@angular/common";
import {PrimeNgModule} from "./prime-ng.module";


@NgModule({
  declarations: [
    HoneyDialogComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    CommonModule,
    PrimeNgModule,
    HoneyDialogComponent,
  ]
})
export class SharedModule { }
