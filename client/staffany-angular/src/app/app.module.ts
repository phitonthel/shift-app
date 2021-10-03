import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShiftComponent } from './shift/shift.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    ShiftComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }