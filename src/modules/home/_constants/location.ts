/* eslint-disable no-unused-vars */
import type { TriggerBtn, ChartContent } from '../_types';

export enum DayValueTrigger {
  FIRST_DAY = 'firstDay',
  SECOND_DAY = 'secondDay',
}

export const dayMapper = new Map<string, DayValueTrigger>([
  ['2024-11-28', DayValueTrigger.FIRST_DAY],
  ['2024-11-29', DayValueTrigger.SECOND_DAY],
]);

export const tabsTrigger: TriggerBtn[] = [
  {
    value: DayValueTrigger.FIRST_DAY,
    mainMsg: 'Day 1',
    altMsg: '28 November 24',
  },
  {
    value: DayValueTrigger.SECOND_DAY,
    mainMsg: 'Day 2',
    altMsg: '29 November 24',
  },
];

export const tabsContent: ChartContent[] = [
  {
    value: DayValueTrigger.FIRST_DAY,
    src: '/assets/images/4fb53eca95973f9a1e60dc19a0c0972a.png',
    alt: 'firstDayChart',
  },
  {
    value: DayValueTrigger.SECOND_DAY,
    src: '/assets/illustrations/cloud.png',
    alt: 'secondDayChart',
  },
];
