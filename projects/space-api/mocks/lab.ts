import { Lab, LabEquipmentTypes } from '../types';

export const mockedLabs: Lab[] = [
  {
    id: 1,
    details: {
      name: 'YaoNet Lab',
      autonomous: false,
      moonId: 20
    },
    members: {
      entries: [
        {firstName: 'Yao', lastName: 'Ming'},
        {firstName: 'Wanna', lastName: 'Lee'},
        {firstName: 'Liu', lastName: 'Kang'}
      ]
    },
    equipment: {
      entries: [
        {type: LabEquipmentTypes.Computer, model: 'Asus', os: 'Windows'},
        {type: LabEquipmentTypes.Detector, name: 'Detektor promieniowania kosmicznego', productionYear: 2018}
      ]
    }
  },
  {
    id: 2,
    details: {
      name: 'SpaceX Lab',
      autonomous: true,
      moonId: 1
    },
    members: {
      entries: []
    },
    equipment: {
      entries: [
        {type: LabEquipmentTypes.Computer, model: 'Macbook Pro', os: 'Macos'},
        {type: LabEquipmentTypes.Detector, name: 'Detektor audio-wizualny', productionYear: 2020}
      ]
    }
  }
];
