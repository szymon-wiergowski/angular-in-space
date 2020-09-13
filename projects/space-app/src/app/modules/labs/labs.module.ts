import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EquipmentsModule } from '../equipments/equipments.module';

import { LabsRoutingModule } from './labs-routing.module';
import { LabFormService } from './services/lab-form/lab-form.service';
import { LabsComponent } from './views/labs/labs.component';
import { LabsListComponent } from './components/labs-list/labs-list.component';
import { LabsListItemComponent } from './components/labs-list-item/labs-list-item.component';
import { MoonNamePipe } from './pipes/moon-name/moon-name.pipe';
import { LabFormComponent } from './views/lab-form/lab-form.component';
import { LabDetailsFormComponent } from './components/lab-details-form/lab-details-form.component';
import { LabEquipmentsFormComponent } from './components/lab-equipments-form/lab-equipments-form.component';

@NgModule({
  declarations: [
    LabsComponent,
    LabsListComponent,
    LabsListItemComponent,
    MoonNamePipe,
    LabFormComponent,
    LabDetailsFormComponent,
    LabEquipmentsFormComponent,
  ],
  imports: [
    CommonModule,
    EquipmentsModule,
    LabsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LabFormService
  ]
})
export class LabsModule { }
