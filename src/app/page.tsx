import {
  CompanyLogos,
  Footer,
  Location,
  Seminar,
} from '@/modules/home/_sections';
import { NavBar } from '@/shared/components/navbar';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Seminar />
        <CompanyLogos
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
