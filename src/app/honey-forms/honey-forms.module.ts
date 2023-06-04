import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoneyFormsComponent } from './honey-forms.component';
import { HoneyListComponent } from './honey-list/honey-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoneyUploaderComponent } from './honey-add-document/honey-uploader/honey-uploader.component';
import { SharedModule } from '../shared/shared.module';
import { HoneyAddDocumentComponent } from './honey-add-document/honey-add-document.component';
import { HoneyItemComponent } from './honey-list/honey-item/honey-item.component';
import { RouterModule } from '@angular/router';
import { HoneyFormsRoutingModule } from './honey-forms-routing.module';

@NgModule({
  declarations: [
    HoneyFormsComponent,
    HoneyListComponent,
    HoneyUploaderComponent,
    HoneyAddDocumentComponent,
    HoneyItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HoneyFormsRoutingModule,
  ],
})
export class HoneyFormsModule {}
