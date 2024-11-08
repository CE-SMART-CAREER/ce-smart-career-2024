import { CompanyLogo } from '../_components';
import { CompanyInfoModal } from '../_components/company-info-modal';

import type { Company } from '../_types';

type Props = {
  companies: Company[];
  selectedCompanyId: number;
};

export default function CompanyLogos({ companies, selectedCompanyId }: Props) {
  const selectedCompany = companies?.find(
    (company: Company) => company.Id === selectedCompanyId,
  );

  return (
    <article
      id="companies"
      className="mx-auto flex flex-col justify-center bg-black"
    >
      <section className="bg-linear-orange-gray px-0 py-10 text-white sm:px-10">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          บริษัทที่เข้าร่วม
          <span className="visuallyhidden">กิจกรรม CE smart career 2024</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4 lg:px-8">
          {companies?.map((company: Company, index: number) => (
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
