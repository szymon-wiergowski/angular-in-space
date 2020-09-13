import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Lab,
  LabDetails,
  LabEquipment, LabEquipmentComputer, LabEquipmentDetector,
  LabEquipmentEntry,
  LabEquipmentTypes,
  LabMembers,
  LabMembersEntry
} from 'space-api/types';
import { LabEquipmentFormBuilder } from '../../types/lab-equipment-form-builder';

@Injectable({
  providedIn: 'root'
})
export class LabFormService {
  private readonly equipmentFormBuilderMap = new Map<LabEquipmentTypes, LabEquipmentFormBuilder>([
    [LabEquipmentTypes.Detector, this.buildDetector.bind(this)],
    [LabEquipmentTypes.Computer, this.buildComputer.bind(this)]
  ]);

  buildForm(lab: Lab): FormGroup {
    return new FormGroup({
      id: new FormControl(lab.id),
      details: this.buildDetails(lab.details),
      members: this.buildMembersList(lab.members),
      equipment: this.buildEquipmentList(lab.equipment)
    });
  }

  private buildDetails(details: LabDetails): FormGroup {
    return new FormGroup({
      name: new FormControl(details.name, {validators: [Validators.required]}),
      moonId: new FormControl(details.moonId, {validators: [Validators.required]}),
      autonomous: new FormControl(details.autonomous)
    });
  }

  private buildMembersList(members: LabMembers): FormGroup {
    return new FormGroup({
      entries: new FormArray(members.entries.map(member => this.buildMember(member)))
    });
  }

  private buildMember(member: LabMembersEntry): FormGroup {
    return new FormGroup({
      firstName: new FormControl(member.firstName, {validators: Validators.required}),
      lastName: new FormControl(member.lastName, {validators: Validators.required}),
    });
  }

  private buildEquipmentList(equipment: LabEquipment): FormGroup {
    return new FormGroup({
      entries: new FormArray(equipment.entries.map(item => this.buildEquipment(item)))
    });
  }

  private buildEquipment(equipment: LabEquipmentEntry): FormGroup {
    return this.equipmentFormBuilderMap.get(equipment.type)(equipment);
  }

  private buildComputer(equipment: LabEquipmentComputer): FormGroup {
    return new FormGroup({
      model: new FormControl(equipment.model, {validators: [Validators.required]}),
      os: new FormControl(equipment.os, {validators: [Validators.required]}),
      type: new FormControl(LabEquipmentTypes.Computer, {validators: [Validators.required]}),
    });
  }

  private buildDetector(equipment: LabEquipmentDetector): FormGroup {
    return new FormGroup({
      name: new FormControl(equipment.name, {validators: [Validators.required]}),
      productionYear: new FormControl(equipment.productionYear, {validators: [Validators.required]}),
      type: new FormControl(LabEquipmentTypes.Detector, {validators: [Validators.required]}),
    });
  }
}
