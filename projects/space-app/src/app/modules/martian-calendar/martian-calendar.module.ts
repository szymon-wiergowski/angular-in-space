import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartianCalendarRoutingModule } from './martian-calendar-routing.module';
import { MartianCalendarComponent } from './martian-calendar.component';


@NgModule({
  declarations: [MartianCalendarComponent],
  imports: [
    CommonModule,
    MartianCalendarRoutingModule
  ]
})
export class MartianCalendarModule { }
