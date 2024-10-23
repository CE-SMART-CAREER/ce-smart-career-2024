import { CompanyLogo } from '@/shared/components';

const companies = [
  { name: 'SCB', logo: '/assets/images/company-logos/scb.png' },
  { name: 'MFEC', logo: '/assets/images/company-logos/mfec.png' },
  { name: 'Nimble', logo: '/assets/images/company-logos/nimble.png' },
  { name: 'Conicle', logo: '/assets/images/company-logos/conicle.png' },
  { name: 'Accenture', logo: '/assets/images/company-logos/accenture.png' },
  { name: 'KPMG', logo: '/assets/images/company-logos/kpmg.png' },
  { name: 'NTT', logo: '/assets/images/company-logos/ntt.png' },
  { name: 'Krungsri', logo: '/assets/images/company-logos/krungsri.png' },
  { name: 'DCS', logo: '/assets/images/company-logos/dcs.png' },
  { name: 'AIT', logo: '/assets/images/company-logos/ait.png' },
  { name: 'Bluebik', logo: '/assets/images/company-logos/bluebik.png' },
  { name: 'Aware', logo: '/assets/images/company-logos/aware.png' },
  { name: 'Sunday', logo: '/assets/images/company-logos/sunday.png' },
  {
    name: 'Digital Alchemy',
    logo: '/assets/images/company-logos/digital-alchemy.png',
  },
  { name: 'IT One', logo: '/assets/images/company-logos/itone.png' },
  { name: 'Yannix', logo: '/assets/images/company-logos/yannix.png' },
];

export default function Location() {
  return (
    <article className="mx-auto flex flex-col justify-center bg-linear-black-orange">
      <section className="px-0 py-10 text-white sm:px-10">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          บริษัทที่เข้าร่วม
        </h2>
        <div className="grid grid-cols-3 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {companies.map((company, index) => (
            <CompanyLogo key={index} company={company} />
          ))}
        </div>
      </section>
    </article>
  );
}
