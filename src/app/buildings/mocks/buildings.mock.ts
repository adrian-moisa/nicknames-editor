import { Building } from '../interfaces/building';

export const buildingsMock: Building[] = [
  {
    name: 'Parking',
    nicknames: [],
    address: ' 30 St Mary Axe, London',
    description: 'Description 1',
  },
  {
    name: 'Campus',
    nicknames: [
      'A',
      'B',
      'C'
    ],
    address: ' 30 St Mary Axe, London',
    description: 'Description 1',
  },
  {
    name: 'Cantina',
    nicknames: [
      'D'
    ],
    address: ' 30 St Mary Axe, London',
    description: 'Description 2',
  }
];
