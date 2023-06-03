import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoneyFormsComponent} from './honey-forms.component';
import {HoneyListComponent} from './honey-list/honey-list.component';
import {PrimeNgModule} from '../shared/prime-ng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HoneyUploaderComponent} from './honey-add-document/honey-uploader/honey-uploader.component';
import {SharedModule} from "../shared/shared.module";
import { HoneyAddDocumentComponent } from './honey-add-document/honey-add-document.component';

@NgModule({
  declarations: [
    HoneyFormsComponent,
    HoneyListComponent,
    HoneyUploaderComponent,
    HoneyAddDocumentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HoneyFormsModule { }
