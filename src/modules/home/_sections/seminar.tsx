import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { SeminarTable } from '@/shared/components/seminar-table';
import { seminarList } from '@/shared/constants/seminar-data';
import { formatDateToString } from '@/shared/utils/formatDate';
import Image from 'next/image';

export default function Seminar() {
  return (
    <article className="relative mx-auto flex flex-col bg-black xl:max-w-screen-xl">
      <div className="relative w-full">
        <Image
          src="/assets/illustrations/cloud.png"
          alt="cloud-png"
          width={2880}
          height={347}
          className="object-cover"
        />
      </div>
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200 opacity-30 blur-2xl"></div>

      <div className="relative mx-auto flex h-svh w-10/12 flex-col md:w-3/4">
        <h2 className="w-full text-3xl font-bold md:text-4xl">
          กำหนดการสัมมนา
        </h2>

        <Tabs defaultValue="day1" className="flex flex-col gap-2">
          <TabsList className="mx-10 my-6 flex w-fit flex-row flex-wrap gap-4 md:gap-6 lg:gap-20">
            {seminarList.map((seminarSlot, index) => (
              <TabsTrigger
                key={index + 1}
                value={`day${index + 1}`}
                className="flex flex-row flex-wrap items-baseline gap-5 py-3 text-xl text-gray-400 transition-colors duration-300 hover:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-orange-300 data-[state=active]:text-orange-300 md:text-2xl"
              >
                <span className="text-xl font-bold md:text-2xl">
                  Day {index + 1}{' '}
                </span>
                <span className="text-md md:text-xl">
                  {formatDateToString(seminarSlot.date)}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {seminarList.map((seminarSlot, index) => (
            <TabsContent key={index + 1} value={`day${index + 1}`}>
              <SeminarTable seminars={seminarSlot.seminars} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </article>
  );
}
