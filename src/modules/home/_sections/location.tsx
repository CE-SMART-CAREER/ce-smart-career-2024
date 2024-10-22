import { GradientCard } from '@/shared/components';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import Image from 'next/image';

export default function Location() {
  return (
    <article className="relative mx-auto flex h-svh flex-col justify-center xl:max-w-screen-xl">
      <Tabs
        defaultValue="firstDay"
        className="flex h-full w-full flex-col justify-center gap-5 px-20"
      >
        <h2 className="w-full text-3xl font-bold md:text-4xl">
          สถานที่ และผังงาน
        </h2>

        <TabsList className="flex gap-20 text-end font-bold">
          <TabsTrigger className="flex gap-10" value="firstDay">
            <span className="text-xl md:text-2xl">Day 1</span>
            <span className="h-full text-lg md:text-xl">28 November 24</span>
          </TabsTrigger>
          <TabsTrigger className="flex gap-10" value="secondDay">
            <span className="text-xl md:text-2xl">Day 2</span>
            <span className="h-full text-lg md:text-xl">29 November 24</span>
          </TabsTrigger>
        </TabsList>

        <section className="flex w-full gap-5">
          <GradientCard className="h-full w-full px-3 py-5">
            <TabsContent className="h-full w-full" value="firstDay">
              <AspectRatio
                className="flex w-full items-center justify-center"
                ratio={16 / 9}
              >
                <Image
                  src="/assets/images/4fb53eca95973f9a1e60dc19a0c0972a.png"
                  alt="dayOneChart"
                  width={725}
                  height={290}
                  className="max-h-[290px] w-full max-w-[725px] rounded-sm"
                />
              </AspectRatio>
            </TabsContent>
            <TabsContent className="w-full" value="secondDay">
              <Image
                src="/assets/images/4fb53eca95973f9a1e60dc19a0c0972a.png"
                alt="dayTwoChart"
                width={725}
                height={290}
                className="max-h-[290px] w-full max-w-[725px] rounded-sm"
              />
            </TabsContent>
          </GradientCard>

          <GradientCard className="flex h-full w-full basis-1/3 flex-col gap-5 px-3 py-5">
            <p className="text-2xl font-bold text-orange-300">
              ค้นหาชื่อบริษัท
            </p>
            <GradientCard className="flex gap-5 px-5 py-1">
              <span>?</span>
              <input
                className="w-full bg-transparent placeholder-white focus:outline-0"
                type="text"
                placeholder="พิมพ์ชื่อบริษัทย์"
              ></input>
            </GradientCard>
          </GradientCard>
        </section>
      </Tabs>
    </article>
  );
}
