import type { SeminarSlot } from '../_types';
import { formatStr, fTime } from '@/shared/utils';

type Props = {
  seminars: SeminarSlot[];
};

export function SeminarTable({ seminars }: Props) {
  return (
    <table className="w-full border-collapse overflow-scroll rounded-lg border-none bg-linear-gray-orange">
      <thead>
        <tr>
          <th className="md:pl-15 mx-6 w-1/3 border-none py-3 pl-10 text-left md:py-6 lg:py-8 lg:pl-20">
            เวลา
          </th>
          <th className="w-1/3 border-none py-3 pl-10 text-left md:py-6 lg:py-8 lg:pl-20">
            ห้องที่ 1 (001)
          </th>
          <th className="w-1/3 border-none py-3 pl-10 text-left md:py-6 lg:py-8 lg:pl-20">
            ห้องที่ 2 (002)
          </th>
        </tr>
      </thead>
      <tbody>
        {seminars.map((seminar, index) => (
          <tr key={index}>
            <td className="md:pl-15 mx-6 w-1/3 border-none py-3 pl-10 md:py-6 lg:py-8 lg:pl-20">
              {`${fTime(seminar.startAt, formatStr.time24Hr)}-${fTime(seminar.endAt, formatStr.time24Hr)}`}
            </td>
            <td className="w-1/3 border-none py-3 pl-10 md:py-6 lg:py-8 lg:pl-20">
              {seminar.room1}
            </td>
            <td className="w-1/3 border-none py-3 pl-10 md:py-6 lg:py-8 lg:pl-20">
              {seminar.room2}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
