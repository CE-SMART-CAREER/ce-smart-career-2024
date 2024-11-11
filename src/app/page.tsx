import {
  CompanyLogos,
  Footer,
  Location,
  Seminar,
} from '@/modules/home/_sections';
import { NavBar } from '@/shared/components/navbar';
import { getCompanies } from '../modules/home/_services';

type SearchParamProps = {
  searchParams: Record<string, string>;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const companies = await getCompanies();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Seminar />
        <CompanyLogos
          companies={companies?.list}
          selectedCompanyId={
            searchParams?.companyId ? Number(searchParams.companyId) : 0
          }
        />
        <Location />
      </main>
      <Footer />
    </>
  );
}
