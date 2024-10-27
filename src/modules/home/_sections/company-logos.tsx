import { CompanyLogo } from '../_components';
import { getCompanies } from '../_services/nocodb';

type Seminar = {
  startAt: string;
  endAt: string;
  room: number;
};

type CompanyInfo = {
  Id: number;
  name: string;
  description: string;
  link: string;
  logo: string;
  date: string;
  type: string;
  nc_pejk___seminar_id: number;
  seminar: Seminar | null;
};

export default async function CompanyLogos() {
  const companies = await getCompanies();

  return (
    <article className="mx-auto flex flex-col justify-center bg-black">
      <section className="bg-linear-orange-gray px-0 py-10 text-white sm:px-10">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          บริษัทที่เข้าร่วม
          <span className="visuallyhidden">กิจกรรม CE smart career 2024</span>
        </h2>
        <div className="grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4 lg:px-8">
          {companies?.list?.map((company: CompanyInfo, index: number) => (
            <CompanyLogo
              key={index}
              name={company?.name}
              logo={company?.logo}
              type={company?.type}
              description={company?.description}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
