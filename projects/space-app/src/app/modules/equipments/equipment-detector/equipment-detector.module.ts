import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquipmentDetector, EquipmentTypes } from 'space-api/types';
import { registerEquipmentConfig } from '../equipments-config-registry';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EquipmentDetectorModule {
  constructor() {
    registerEquipmentConfig<EquipmentDetector>({
      type: EquipmentTypes.Detector,
      readComponent: null,
      formComponent: null,
      getSpecificControls: equipment => ({
        precision: new FormControl(equipment.precision, {validators: [Validators.required]}),
        productionYear: new FormControl(equipment.productionYear, {validators: [Validators.required]}),
        type: new FormControl(EquipmentTypes.Detector, {validators: [Validators.required]}),
      })
    });
  }
}
