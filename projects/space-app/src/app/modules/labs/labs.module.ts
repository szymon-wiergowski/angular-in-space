import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LabsRoutingModule } from './labs-routing.module';
import { LabsComponent } from './views/labs/labs.component';
import { LabsListComponent } from './components/labs-list/labs-list.component';
import { LabsListItemComponent } from './components/labs-list-item/labs-list-item.component';
import { MoonNamePipe } from './pipes/moon-name/moon-name.pipe';
import { LabFormComponent } from './views/lab-form/lab-form.component';
import { LabDetailsFormComponent } from './components/lab-details-form/lab-details-form.component';
import { LabMembersFormComponent } from './components/lab-members-form/lab-members-form.component';
import { LabEquipmentFormComponent } from './components/lab-equipment-form/lab-equipment-form.component';


@NgModule({
  declarations: [
    LabsComponent,
    LabsListComponent,
    LabsListItemComponent,
    MoonNamePipe,
    LabFormComponent,
    LabDetailsFormComponent,
    LabMembersFormComponent,
    LabEquipmentFormComponent
  ],
  imports: [
    CommonModule,
    LabsRoutingModule,
    ReactiveFormsModule
  ]
})
export class LabsModule { }
