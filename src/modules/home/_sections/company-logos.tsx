import { CompanyLogo } from '../_components';
import { CompanyInfoModal } from '../_components/company-info-modal';
import { getCompanies } from '../_services/nocodb';
import type { Company } from '../_types';

type Props = {
  selectedCompanyId: number;
};

export default async function CompanyLogos({ selectedCompanyId }: Props) {
  const companies = await getCompanies();

  const selectedCompany = companies?.list?.find(
    (company: CompanyInfo) => company.Id === selectedCompanyId,
  );

  return (
    <article className="mx-auto flex flex-col justify-center bg-black">
      <section className="bg-linear-orange-gray px-0 py-10 text-white sm:px-10">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          บริษัทที่เข้าร่วม
          <span className="visuallyhidden">กิจกรรม CE smart career 2024</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4 lg:px-8">
          {companies?.list?.map((company: Company, index: number) => (
            <CompanyLogo
              key={index}
              name={company?.name}
              logo={company?.logo}
              companyId={company?.Id}
            />
          ))}
        </div>
      </section>
      {selectedCompany && (
        <CompanyInfoModal
          name={selectedCompany.name}
          logo={selectedCompany.logo}
          type={selectedCompany.type}
          description={selectedCompany.description}
        />
      )}
    </article>
  );
}
