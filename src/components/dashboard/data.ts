import { RentalTool } from './types';

export const RENTAL_TOOLS_DATA: RentalTool[] = [
  {
    order: 1,
    toolRef: 6465,
    member: {
      firstName: 'Alex',
      lastName: 'Noman',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      level: 1,
    },
    workStatus: 'completed',
    duration: 900000,
  },
  {
    order: 2,
    toolRef: 5665,
    member: {
      firstName: 'Razib',
      lastName: 'Rahman',
      profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      level: 2,
    },
    workStatus: 'inProgress',
    duration: 300000,
  },
  {
    order: 3,
    toolRef: 1755,
    member: {
      firstName: 'Luke',
      lastName: 'Norton',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      level: 3,
    },
    workStatus: 'notStarted',
    duration: 0,
  },
];
