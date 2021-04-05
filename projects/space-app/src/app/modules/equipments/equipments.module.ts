import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EquipmentFormComponent } from './components/equipment-form/equipment-form.component';
import { EquipmentComputerModule } from './equipment-computer/equipment-computer.module';
import { EquipmentDetectorModule } from './equipment-detector/equipment-detector.module';
import { equipmentsConfigRegistry } from './equipments-config-registry';
import { EQUIPMENT_CONFIG } from './tokens/equipment-config';

@NgModule({
  declarations: [EquipmentFormComponent],
  providers: [{provide: EQUIPMENT_CONFIG, useValue: equipmentsConfigRegistry}],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    EquipmentFormComponent,
    EquipmentComputerModule,
    EquipmentDetectorModule
  ]
})
export class EquipmentsModule { }
