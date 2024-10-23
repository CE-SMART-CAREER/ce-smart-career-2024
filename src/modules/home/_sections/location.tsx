import { cn } from '@/lib/utils';
import { GradientCard } from '@/shared/components';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';

import { tabsContent, tabsTrigger } from '../_constants';
import { companyList } from '@/shared/constants';
import type { ChartContent, TriggerBtn } from '../_types';
import type { Company } from '@/shared/types';
import { Button } from '@/components/ui/button';

type ChartProps = {
  content: ChartContent;
};

function Chart({ content } : ChartProps) {
  return (
    <div className="flex flex-col h-full w-full justify-center py-5 lg:py-0 gap-2">
      <AspectRatio className="flex h-full w-full items-center" ratio={16 / 7}>
        <Image
          src={content.src}
          alt={content.alt}
          width={725}
          height={290}
          className="w-full animate-fade rounded-sm"
        />
      </AspectRatio>
      <Dialog>
        <DialogTrigger asChild className="block sm:hidden self-start">
          <Button variant="outline">ขยายภาพ</Button>
        </DialogTrigger>
        <DialogContent className="flex w-[90vw] h-1/2 p-9 rounded-lg">
          <div className="flex h-full overflow-x-scroll">
            <Image
              src={content.src}
              alt={content.alt}
              width={725}
              height={290}
              className="min-w-[725px] h-full animate-fade rounded-sm"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function Location() {
  const activeTabStyle =
    'data-[state=active]:text-orange-300 data-[state=active]:border-b-orange-300';

  return (
    <div className="relative mx-auto flex min-h-svh flex-col justify-center lg:h-svh xl:max-w-screen-xl">
      <div className="flex h-full w-full flex-col gap-5 p-10 sm:p-20 lg:justify-center xl:p-0">
        <h2 className="w-full text-2xl font-bold sm:text-3xl md:text-4xl">
          สถานที่ และผังงาน
        </h2>

        <Tabs
          defaultValue={tabsTrigger[0].value}
          className="flex h-1/2 w-full flex-col gap-2 sm:gap-5 xl:h-2/3"
        >
          <TabsList className="lg:gap-15 flex gap-10 overflow-x-auto text-end font-bold sm:overflow-visible">
            {tabsTrigger.map((trigger: TriggerBtn) => {
              return (
                <TabsTrigger
                  className={cn(
                    activeTabStyle,
                    'mb-2 flex flex-shrink-0 items-end justify-end gap-7 border-b-[4px] border-b-gray-500 pb-2 md:gap-10',
                  )}
                  value={trigger.value}
                  key={trigger.value}
                >
                  <span className="h-full text-lg sm:text-xl md:text-2xl">
                    {trigger.mainMsg}
                  </span>
                  <span className="text-base sm:text-lg md:text-xl">
                    {trigger.altMsg}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="flex h-full flex-col gap-5 lg:flex-row">
            <GradientCard className="flex h-full w-full items-center justify-center self-baseline px-5">
              {tabsContent.map((content: ChartContent) => {
                return (
                  <TabsContent
                    className="h-full w-full"
                    value={content.value}
                    key={content.value}
                  >
                    <Chart content={content}/>
                  </TabsContent>
                );
              })}
            </GradientCard>

            <GradientCard className="flex h-full w-full basis-[45%] flex-col gap-5 self-end p-7 lg:p-10">
              <h3 className="text-2xl font-bold text-orange-300">
                ค้นหาชื่อบริษัท
              </h3>

              <GradientCard className="flex items-center gap-5 px-5 py-1">
                <span>
                  <Image
                    src="/assets/icons/search-icon.svg"
                    alt="searchg-icons"
                    height={20}
                    width={20}
                  />
                </span>
                <input
                  className="h-full w-full bg-transparent placeholder-gray-100 focus:outline-0"
                  type="text"
                  placeholder="พิมพ์ชื่อบริษัทย์"
                ></input>
              </GradientCard>

              <ul className="flex max-h-[350px] w-full flex-col gap-2 overflow-y-auto pl-2 pr-5 text-sm sm:text-base">
                {companyList.map((company: Company) => {
                  return (
                    <li
                      className="cursor-pointer border-b-2 border-b-gray-400 py-2 hover:border-b-orange-200 hover:text-orange-200"
                      key={company.name}
                    >
                      {company.name}
                    </li>
                  );
                })}
              </ul>
            </GradientCard>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
