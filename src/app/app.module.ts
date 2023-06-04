import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoneyEventsModule } from './honey-events/honey-events.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './shared/prime-ng.module';
import { HoneyFormsModule } from './honey-forms/honey-forms.module';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    HoneyEventsModule,
    HoneyFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
