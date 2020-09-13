import { Type } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Equipment, EquipmentTypes } from 'space-api/types';
import { EquipmentFormComponent } from '../components/equipment-form/equipment-form.component';

export type EquipmentConfig = Map<EquipmentTypes, EquipmentConfigEntry>;

export interface EquipmentConfigEntry<T extends Equipment = Equipment> {
  type: EquipmentTypes;
  readComponent: Type<EquipmentFormComponent>;
  formComponent: Type<EquipmentFormComponent>;
  getSpecificControls(equipment: T): {[name: string]: AbstractControl};
}
