import type { Seminar } from '@/shared/types/seminar-data';

export type SeminarList = {
  date: string;
  seminars: Seminar[];
}[];

export const seminarList: SeminarList = [
  {
    date: '2024-11-28T00:00:00.000Z',
    seminars: [
      {
        startAt: '2024-11-28T09:00:00.000Z',
        endAt: '2024-11-28T09:00:00.000Z',
        room1: 'Albert McDaniel Seminar',
        room2: 'Connor McDaniel Seminar',
      },
      {
        startAt: '2024-11-28T10:00:00.000Z',
        endAt: '2024-11-28T10:00:00.000Z',
        room1: 'Isabelle Hansen Seminar',
        room2: 'Jennie Fuller Seminar',
      },
      {
        startAt: '2024-11-28T11:00:00.000Z',
        endAt: '2024-11-28T11:00:00.000Z',
        room1: 'Daniel Wise Seminar',
        room2: 'Erik Rios Seminar',
      },
      {
        startAt: '2024-11-28T00:00:00.000Z',
        endAt: '2024-11-28T00:00:00.000Z',
        room1: 'Tom McCoy Seminar',
        room2: 'Carolyn Goodwin Seminar',
      },
    ],
  },
  {
    date: '2024-11-29T00:00:00.000Z',
    seminars: [
      {
        startAt: '2024-11-29T09:00:00.000Z',
        endAt: '2024-11-29T09:00:00.000Z',
        room1: 'Seth Singleton Seminar',
        room2: 'May Ferguson Seminar',
      },
      {
        startAt: '2024-11-29T10:00:00.000Z',
        endAt: '2024-11-29T10:00:00.000Z',
        room1: 'Bertha Andrews Science Seminar',
        room2: 'Kathryn Garrett Seminar',
      },
      {
        startAt: '2024-11-29T11:00:00.000Z',
        endAt: '2024-11-29T11:00:00.000Z',
        room1: 'Carl Miller Seminar',
        room2: 'Evan Martinez Seminar',
      },
      {
        startAt: '2024-11-29T00:00:00.000Z',
        endAt: '2024-11-29T00:00:00.000Z',
        room1: 'Craig Jensen Seminar',
        room2: 'Connor Gonzales Seminar',
      },
    ],
  },
];
