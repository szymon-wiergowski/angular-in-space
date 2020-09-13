export enum LabEquipmentTypes {
  Computer= 'COMPUTER',
  Detector = 'DETECTOR'
}

export interface LabDetails {
  name: string;
  autonomous: boolean;
  moonId: number;
}

export interface LabMembersEntry {
  firstName: string;
  lastName: string;
}

export interface LabMembers {
  entries: LabMembersEntry[];
}

export type LabEquipmentEntry = LabEquipmentComputer | LabEquipmentDetector;

export interface LabEquipmentComputer {
  type: LabEquipmentTypes.Computer;
  os: string;
  model: string;
}

export interface LabEquipmentDetector {
  type: LabEquipmentTypes.Detector;
  name: string;
  productionYear: number;
}

export interface LabEquipment {
  entries: LabEquipmentEntry[];
}

export interface Lab {
  id: number;
  details: LabDetails;
  members: LabMembers;
  equipment: LabEquipment;
}
