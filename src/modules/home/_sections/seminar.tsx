'use client';

import { useBoolean } from '@/shared/hooks/use-boolean';

type SeminarData = {
  time: string;
  room1: string;
  room2: string;
};

const day1Data: SeminarData[] = [
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
];

const day2Data: SeminarData[] = [
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
];

export default function SeminarTable() {
  const selectDay1 = useBoolean(true);

  const seminarData = selectDay1.value ? day1Data : day2Data;

  return (
    <article className="relative bg-black">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200 opacity-30 blur-2xl"></div>
      <div className="relative mx-auto flex h-svh w-10/12 flex-col justify-center md:w-3/4">
        <h2 className="w-full text-3xl font-bold md:text-4xl">
          กำหนดการสัมมนา
        </h2>

        <div className="my-6 flex flex-row flex-wrap gap-7">
          <span
            className={`flex cursor-pointer flex-row flex-wrap items-baseline gap-5 p-3 ${selectDay1.value ? 'border-b-2 border-b-orange-300 text-orange-300' : 'text-gray-400 hover:text-white'}`}
            onClick={selectDay1.onTrue}
          >
            <span className="text-xl md:text-2xl">Day 1 </span>
            <span className="text-md md:text-xl">28 November 24</span>
          </span>
          <span
            className={`flex cursor-pointer flex-row flex-wrap items-baseline gap-5 p-3 ${!selectDay1.value ? 'border-b-2 border-b-orange-300 text-orange-300' : 'text-gray-400 hover:text-white'}`}
            onClick={selectDay1.onFalse}
          >
            <span className="text-xl md:text-2xl">Day 2 </span>
            <span className="text-md md:text-xl">29 November 24</span>
          </span>
        </div>

        <table className="border-collapse overflow-hidden rounded-lg border-none bg-linear-gray-orange">
          <thead>
            <tr>
              <th className="w-1/3 border-none p-10 pl-20 text-left">เวลา</th>
              <th className="w-1/3 border-none p-10 text-left">
                ห้องที่ 1 (001)
              </th>
              <th className="w-1/3 border-none p-10 text-left">
                ห้องที่ 2 (002)
              </th>
            </tr>
          </thead>
          <tbody>
            {seminarData.map((entry) => (
              <tr key={entry.time}>
                <td className="w-1/3 border-none p-10 pl-20">{entry.time}</td>
                <td className="w-1/3 border-none p-10">{entry.room1}</td>
                <td className="w-1/3 border-none p-10">{entry.room2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
