import { GradientCard } from '@/shared/components';
import Image from 'next/image';

export default function Description() {
  return (
    <div className="relative z-0 overflow-hidden bg-linear-orange-black-vertical">
      <div className="container relative mx-auto px-5 py-12 lg:py-36 xl:max-w-screen-lg">
        {/* background start here */}
        <div className="absolute right-[10px] top-[15%] z-20 hidden w-[421px] max-w-[30%] lg:block">
          <Image
            className="w-full"
            src="/assets/illustrations/city.png"
            alt=""
            width={400}
            height={1000}
            objectFit="contain"
          ></Image>
        </div>
        <div className="absolute bottom-0 right-0 z-20 hidden w-full lg:block">
          <Image
            className="ms-auto h-full w-auto"
            src="/assets/illustrations/people.png"
            alt=""
            width={1000}
            height={300}
            objectFit="contain"
          ></Image>
          <div className="bg-brown-500 absolute bottom-0 left-0 z-20 h-[100px] w-[calc(100%-150px)]"></div>
        </div>
        <div className="absolute -bottom-[250px] -right-[200px] z-10 hidden h-[968px] w-[1024px] lg:block">
          <Image
            src="/assets/illustrations/intersect.png"
            alt=""
            fill
            objectFit="contain"
          ></Image>
        </div>
        <div className="absolute bottom-[25%] right-[-10%] z-10 hidden h-[282px] w-[373px] lg:block">
          <Image src="/assets/illustrations/sparkle.png" alt="" fill></Image>
        </div>
        {/* background end here */}
        <h2 className="relative z-50 mb-5 text-pretty text-3xl font-bold sm:mb-7 sm:text-4xl md:text-5xl lg:text-6xl">
          CE smart Career คืออะไร ?
        </h2>
        <GradientCard
          className="z-50 w-full max-w-lg p-6 sm:max-w-2xl sm:p-8 lg:max-w-3xl"
          variant="tertiary"
        >
          <p className="font-medium md:text-lg">
            โครงการ CE Smart Career
            <span className="inline-block">
              เป็นโครงการที่รวบรวมข้อมูลในภาคอุตสาหกรรมและทางเลือกให้กับนักศึกษาทั้งที่กำลังจะสำเร็จการศึกษา
              รวมถึงนักศึกษาที่กำลังศึกษาอยู่ในชั้นปีอื่นๆ
              โดยมุ่งเน้นสำหรับผู้ที่ศึกษาทางด้านคอมพิวเตอร์
              และเทคโนโลยีสารสนเทศได้ใช้เป็นข้อมูลเตรียมความพร้อมวางแผนการศึกษาได้อย่างมีประสิทธิภาพ
              ตรงตามแนวทางของตน โดยได้เรียนเชิญสถานประกอบการ
              และบริษัทชั้นนำในประเทศที่ดำเนินการด้านคอมพิวเตอร์
              และเทคโนโลยีสารสนเทศโดยตรงมาให้ความรู้
            </span>
            <br />
            <br />
            <span className="inline-block">
              ทั้งยังสามารถรับสมัครงานนักศึกษาทางด้านคอมพิวเตอร์
              และเทคโนโลยีสารสนเทศที่ใกล้สำเร็จการศึกษาโดยตรง
              นอกจากเป็นการเปิดโอกาสให้นักศึกษาได้เตรียมความพร้อมในการเข้าสู่ภาคอุตสาหกรรม
              และการทำงานแล้วยังเป็นการประชาสัมพันธ์
              และเปิดโอกาสสร้างความร่วมมือให้กับภาควิชา คณะ จนถึงสถาบันฯ
              กับภาคอุตสาหกรรมด้านคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ
              (สำหรับโครงการ CE Smart Career นี้ได้เริ่มดำเนินการตั้งแต่ปี 2551)
            </span>
          </p>
        </GradientCard>
      </div>
    </div>
  );
}
