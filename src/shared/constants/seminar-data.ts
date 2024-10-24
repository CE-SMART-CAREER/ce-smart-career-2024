import { SeminarData } from '@/shared/types/seminar-data';

export type SeminarList = {
  day1: SeminarData[];
  day2: SeminarData[];
};

export const seminarList: SeminarList = {
  day1: [
    {
      time: '09:00 AM',
      room1: 'Albert McDaniel Seminar',
      room2: 'Connor McDaniel Seminar',
    },
    {
      time: '10:00 AM',
      room1: 'Isabelle Hansen Seminar',
      room2: 'Jennie Fuller Seminar',
    },
    {
      time: '11:00 AM',
      room1: 'Daniel Wise Seminar',
      room2: 'Erik Rios Seminar',
    },
    {
      time: '12:00 AM',
      room1: 'Tom McCoy Seminar',
      room2: 'Carolyn Goodwin Seminar',
    },
  ],
  day2: [
    {
      time: '09:00 AM',
      room1: 'Seth Singleton Seminar',
      room2: 'May Ferguson Seminar',
    },
    {
      time: '10:00 AM',
      room1: 'Bertha Andrews Science Seminar',
      room2: 'Kathryn Garrett Seminar',
    },
    {
      time: '11:00 AM',
      room1: 'Carl Miller Seminar',
      room2: 'Evan Martinez Seminar',
    },
    {
      time: '12:00 AM',
      room1: 'Craig Jensen Seminar',
      room2: 'Connor Gonzales Seminar',
    },
  ],
};
