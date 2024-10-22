import { cn } from '@/lib/utils';
import { GradientCard } from '@/shared/components';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import Image from 'next/image';

import { tabsContent, tabsTrigger } from '../_constants';
import { companyList } from '@/shared/constants';
import type { ChartContent, TriggerBtn } from '../_types';
import type { Company } from '@/shared/types';

export default function Location() {
  const activeStyle =
    'data-[state=active]:text-orange-300 data-[state=active]:border-b-orange-300';

  return (
    <div className="relative mx-auto flex h-svh flex-col justify-center xl:max-w-screen-xl">
      <div className="flex h-full w-full flex-col justify-center gap-5 p-20">
        <h2 className="w-full text-3xl font-bold md:text-4xl">
          สถานที่ และผังงาน
        </h2>

        <Tabs
          defaultValue="firstDay"
          className="flex h-1/2 w-full flex-col gap-5 xl:h-2/3"
        >
          <TabsList className="flex gap-10 text-end font-bold lg:gap-20">
            {tabsTrigger.map((trigger: TriggerBtn) => {
              return (
                <TabsTrigger
                  className={cn(
                    activeStyle,
                    'flex items-end justify-end gap-10 border-b-[4px] border-b-transparent pb-5',
                  )}
                  value={trigger.value}
                  key={trigger.value}
                >
                  <span className="h-full text-xl md:text-2xl">
                    {trigger.mainMsg}
                  </span>
                  <span className="text-lg md:text-xl">{trigger.altMsg}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="flex h-full gap-5">
            <GradientCard className="flex h-full w-full items-center justify-center self-baseline px-5">
              {tabsContent.map((content: ChartContent) => {
                return (
                  <TabsContent
                    className="h-full w-full"
                    value={content.value}
                    key={content.value}
                  >
                    <div className="flex h-full w-full justify-center">
                      <AspectRatio
                        className="flex h-full w-full items-center"
                        ratio={16 / 9}
                      >
                        <Image
                          src={content.src}
                          alt={content.alt}
                          width={725}
                          height={290}
                          className="max-h-[290px] w-full max-w-[725px] animate-fade rounded-sm"
                        />
                      </AspectRatio>
                    </div>
                  </TabsContent>
                );
              })}
            </GradientCard>

            <GradientCard className="flex h-full w-full basis-[45%] flex-col gap-3 self-end p-7 lg:gap-5 lg:p-10">
              <h3 className="text-2xl font-bold text-orange-300">
                ค้นหาชื่อบริษัท
              </h3>

              <GradientCard className="flex gap-5 px-5 py-1">
                <span>?</span>
                <input
                  className="w-full bg-transparent placeholder-white focus:outline-0"
                  type="text"
                  placeholder="พิมพ์ชื่อบริษัทย์"
                ></input>
              </GradientCard>

              <ul className="flex max-h-[300px] w-full flex-col gap-2 overflow-y-auto">
                {companyList.map((company: Company) => {
                  return <li key={company.name}>{company.name}</li>;
                })}
              </ul>
            </GradientCard>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
