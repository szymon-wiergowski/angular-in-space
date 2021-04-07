import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Lab, LabDetails, Equipment, EquipmentTypes } from 'space-api/types';

@Injectable({providedIn: 'root'})
export class LabFormService {
  readonly specificControls = {
    [EquipmentTypes.Computer]: equipment => ({
      producer: new FormControl(equipment.producer, {validators: [Validators.required]}),
      os: new FormControl(equipment.os, {validators: [Validators.required]}),
    }),
    [EquipmentTypes.Detector]: equipment => ({
      precision: new FormControl(equipment.precision, {validators: [Validators.required]}),
      productionYear: new FormControl(equipment.productionYear, {validators: [Validators.required]}),
    }),
    // add new types here
  };

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
    return new FormArray(equipments.map(item => this.buildEquipment(item)));
  }

  private buildEquipment(equipment: Equipment): FormGroup {
    return new FormGroup({
      name: new FormControl(equipment.name, {validators: [Validators.required]}),
      tag: new FormControl(equipment.tag, {validators: [Validators.required]}),
      type: new FormControl(equipment.type, {validators: [Validators.required]}),
      ...this.specificControls[equipment.type](equipment)
    });
  }
}
