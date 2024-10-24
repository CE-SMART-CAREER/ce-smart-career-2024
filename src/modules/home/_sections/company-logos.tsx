import { CompanyLogo } from '@/shared/components';

const companies = [
  {
    name: 'Siam Commercial Bank (ธนาคารไทยพาณิชย์)',
    logo: '/assets/images/company-logos/scb.png',
    type: 'Insurance company',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fuga. Sequi, iste ipsam officiis dolor maiores doloremque rerum distinctio quia asperiores molestias debitis minus similique nihil, ipsa, quas dolorem explicabo?',
  },
  {
    name: 'Bluebik',
    logo: '/assets/images/company-logos/bluebik.png',
    type: 'Insurance company',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fuga. Sequi, iste ipsam officiis dolor maiores doloremque rerum distinctio quia asperiores molestias debitis minus similique nihil, ipsa, quas dolorem explicabo?',
  },
];

export default function CompanyLogos() {
  return (
    <article className="mx-auto flex flex-col justify-center bg-black">
      <section className="bg-linear-orange-gray px-0 py-10 text-white sm:px-10">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          บริษัทที่เข้าร่วม
          <span className="visuallyhidden">กิจกรรม CE smart career 2024</span>
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
