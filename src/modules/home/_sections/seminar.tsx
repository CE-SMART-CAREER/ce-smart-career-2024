import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { SeminarTable } from '@/modules/home/_components';
import { fDate, formatStr } from '@/shared/utils';
import { getSeminarsGroupedByDay } from '../_utils';

export default async function Seminar() {
  const seminarList = await getSeminarsGroupedByDay();

  return (
    <article className="relative mx-auto flex h-svh flex-col bg-black">
      <div className="absolute h-full w-full">
        <Image
          src="/assets/illustrations/cloud.png"
          alt="cloud-png"
          width={2880}
          height={347}
          className="object-cover"
        />
      </div>
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200 opacity-30 blur-2xl"></div>

      <div className="relative mx-auto flex w-10/12 flex-col pt-[8%] md:w-3/4">
        <h2 className="w-full text-3xl font-bold sm:text-3xl md:text-4xl">
          กำหนดการสัมมนา
        </h2>
        {seminarList.length <= 0 && (
          <p className="mt-4 w-full text-2xl font-bold md:text-2xl">
            ไม่พบกำหนดการ
          </p>
        )}

        <Tabs defaultValue="day1" className="flex flex-col gap-2">
          <TabsList className="mx-0 my-4 flex w-fit flex-row flex-wrap gap-4 sm:mx-10 sm:my-6 md:mx-2 md:gap-8 lg:gap-20">
            {seminarList.map((seminarSlot, index) => (
              <TabsTrigger
                key={index + 1}
                value={`day${index + 1}`}
                className="flex flex-row flex-wrap items-baseline gap-2 text-xl text-gray-400 transition-colors duration-300 hover:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-orange-300 data-[state=active]:text-orange-300 sm:gap-5 sm:py-3 md:text-2xl"
              >
                <span className="text-lg font-bold sm:text-xl md:text-2xl">
                  Day {index + 1}{' '}
                </span>
                <span className="sm:text-lg md:text-xl">
                  {fDate(seminarSlot.date, formatStr.longDate)}
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
