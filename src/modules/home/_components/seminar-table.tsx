import type { Seminar } from '@/shared/types/seminar-data';
import { formatStr, fTime } from '@/shared/utils';

export function SeminarTable({ seminars }: { seminars: Seminar[] }) {
  return (
    <table className="w-full border-collapse overflow-hidden rounded-lg border-none bg-linear-gray-orange">
      <thead>
        <tr>
          <th className="md:pl-15 mx-6 w-1/3 border-none py-4 pl-10 text-left md:py-10 lg:pl-20">
            เวลา
          </th>
          <th className="mx-6 w-1/3 border-none py-4 text-left md:py-10">
            ห้องที่ 1 (001)
          </th>
          <th className="mx-6 w-1/3 border-none py-4 text-left md:py-10">
            ห้องที่ 2 (002)
          </th>
        </tr>
      </thead>
      <tbody>
        {seminars.map((seminar, index) => (
          <tr key={index}>
            <td className="md:pl-15 mx-6 w-1/3 border-none py-4 pl-10 md:py-10 lg:pl-20">
              {`${fTime(seminar.startAt, formatStr.time24Hr)}-${fTime(seminar.endAt, formatStr.time24Hr)}`}
            </td>
            <td className="mx-6 w-1/3 border-none py-4 md:py-10">
              {seminar.room1}
            </td>
            <td className="mx-6 w-1/3 border-none py-4 md:py-10">
              {seminar.room2}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
