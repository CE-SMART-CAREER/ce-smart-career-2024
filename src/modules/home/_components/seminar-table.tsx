import type { SeminarSlot } from '../_types';
import { formatStr, fTime } from '@/shared/utils';
import { GradientCard } from '@/shared/components';

type Props = {
  seminars: SeminarSlot[];
};

export function SeminarTable({ seminars }: Props) {
  return (
    <GradientCard className="overflow-auto rounded-lg bg-linear-gray-orange p-0.5">
      <table className="w-full table-auto border-collapse animate-fade rounded-lg border-none">
        <thead>
          <tr>
            <th className="md:pl-15 mx-6 w-1/3 animate-fade border-b-2 border-gray-500 p-2 text-left md:px-10 md:py-6 lg:py-8 lg:pl-20">
              เวลา
            </th>
            <th className="w-1/3 animate-fade border-b-2 border-gray-500 p-2 text-left md:px-10 md:py-6 lg:py-8 lg:pl-20">
              ห้องที่ 1 (802)
            </th>
            <th className="w-1/3 animate-fade border-b-2 border-gray-500 p-2 text-left md:px-10 md:py-6 lg:py-8 lg:pl-20">
              ห้องที่ 2 (807)
            </th>
          </tr>
        </thead>
        <tbody>
          {seminars.map((seminar, index) => (
            <tr key={index}>
              <td className="md:pl-15 mx-6 w-1/3 animate-fade border-none p-2 md:px-10 md:py-6 lg:py-8 lg:pl-20">
                {`${fTime(seminar.startAt, formatStr.time24Hr)}-${fTime(seminar.endAt, formatStr.time24Hr)}`}
              </td>
              <td className="w-1/3 animate-fade border-none p-2 md:px-10 md:py-6 lg:py-8 lg:pl-20">
                {seminar.room1}
              </td>
              <td className="w-1/3 animate-fade border-none p-2 md:px-10 md:py-6 lg:py-8 lg:pl-20">
                {seminar.room2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </GradientCard>
  );
}
