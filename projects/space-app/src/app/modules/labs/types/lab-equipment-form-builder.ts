import { FormGroup } from '@angular/forms';
import { LabEquipmentEntry } from 'space-api/types';

export type LabEquipmentFormBuilder = (equipment: LabEquipmentEntry) => FormGroup;
