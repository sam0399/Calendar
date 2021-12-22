import { NgModule } from '@angular/core';
import { CalendarLibComponent } from './calendar-lib.component';
import { CalendarModule } from 'primeng/calendar'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CalendarLibComponent
  ],
  imports: [
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    CalendarLibComponent
  ]
})
export class CalendarLibModule { }
