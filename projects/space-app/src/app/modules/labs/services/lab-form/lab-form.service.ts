import { Inject, Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Lab, LabDetails, Equipment } from 'space-api/types';
import { EQUIPMENT_CONFIG } from '../../../equipments/tokens/equipment-config';
import { EquipmentConfig } from '../../../equipments/types/equipment-config';

@Injectable()
export class LabFormService {
  constructor(@Inject(EQUIPMENT_CONFIG) private config: EquipmentConfig) {}

  buildForm(lab: Lab): FormGroup {
    return new FormGroup({
      id: new FormControl(lab.id),
      details: this.buildDetails(lab.details),
      equipments: this.buildEquipmentList(lab.equipments)
    });
  }

  private buildDetails(details: LabDetails): FormGroup {
    return new FormGroup({
      name: new FormControl(details.name, {validators: [Validators.required]}),
      moonId: new FormControl(details.moonId, {validators: [Validators.required]}),
      autonomous: new FormControl(details.autonomous),
      enableTags: new FormControl(details.enableTags)
    });
  }

  private buildEquipmentList(equipments: Equipment[]): FormArray {
    return new FormArray(equipments.map(item => this.buildEquipment(item)))
  }

  private buildEquipment(equipment: Equipment): FormGroup {
    return new FormGroup({
      ...this.getCommonEquipmentControls(equipment),
      ...this.config.get(equipment.type).getSpecificControls(equipment)
    })
  }

  private getCommonEquipmentControls(equipment: Equipment): {[name: string]: FormControl} {
    return {
      name: new FormControl(equipment.name, {validators: [Validators.required]}),
      tag: new FormControl(equipment.tag, {validators: [Validators.required]})
    };
  }
}
