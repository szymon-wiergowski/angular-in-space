import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquipmentComputer, EquipmentTypes } from 'space-api/types';
import { registerEquipmentConfig } from '../equipments-config-registry';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EquipmentComputerModule {
  constructor() {
    registerEquipmentConfig<EquipmentComputer>({
      type: EquipmentTypes.Computer,
      readComponent: null,
      formComponent: null,
      getSpecificControls: equipment => ({
        producer: new FormControl(equipment.name, {validators: [Validators.required]}),
        os: new FormControl(equipment.os, {validators: [Validators.required]}),
        type: new FormControl(EquipmentTypes.Computer, {validators: [Validators.required]}),
      })
    });
  }
}
