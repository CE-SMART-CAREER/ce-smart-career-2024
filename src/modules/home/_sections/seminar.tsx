import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { SeminarTable } from '@/modules/home/_components';
import { fDate, formatStr } from '@/shared/utils';
import { getSeminarsGroupedByDay } from '../_utils';

export default async function Seminar() {
  const seminarList = await getSeminarsGroupedByDay();

  return (
    <article className="relative mx-auto flex flex-col bg-black pb-20">
      <div id="seminar" className="anchor-holder invisible relative p-4">
        #
      </div>
      <div className="relative w-full">
        <Image
          src="/assets/illustrations/cloud.png"
          alt="cloud-png"
          width={2880}
          height={347}
          className="object-cover"
        />
      </div>
      <div className="absolute left-6 top-20 h-20 w-20 rounded-full bg-orange-100 opacity-50 blur-2xl sm:h-16 sm:w-16 md:h-48 md:w-48 md:opacity-25 xl:left-10 xl:h-60 xl:w-60"></div>
      <div className="absolute left-0 top-20 h-24 w-32 rounded-full bg-orange-200 opacity-50 blur-3xl sm:h-28 sm:w-36 md:h-64 md:w-80 md:opacity-25 xl:left-14 xl:h-96 xl:w-72"></div>

      <div className="relative mx-auto flex w-10/12 flex-col md:w-3/4">
        <h2 className="w-full text-3xl font-bold sm:text-3xl md:text-4xl">
          กำหนดการสัมมนา
        </h2>
        {seminarList.length <= 0 && (
          <p className="mt-2 w-full text-2xl font-bold md:text-2xl">
            ไม่พบกำหนดการ
          </p>
        )}

        <Tabs defaultValue="day1" className="flex flex-col">
          <TabsList className="mx-0 my-2 flex w-fit flex-row flex-wrap gap-2 sm:mx-10 sm:my-3 md:mx-2 md:gap-6 lg:gap-20">
            {seminarList.map((seminarSlot, index) => (
              <TabsTrigger
                key={index + 1}
                value={`day${index + 1}`}
                className="flex flex-row flex-wrap items-baseline gap-2 text-xl text-gray-100 transition-colors duration-300 hover:text-white data-[state=active]:border-b-4 data-[state=active]:border-b-orange-300 data-[state=active]:text-orange-300 sm:gap-5 sm:py-2 md:text-2xl"
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
