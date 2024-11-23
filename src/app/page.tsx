import { Content } from '@/modules/home/_sections';
import { NavBar } from '@/shared/components/navbar';
import { getCompanies } from '../modules/home/_services';
import { getSeminarsGroupedByDay } from '@/modules/home/_utils';

type SearchParamProps = {
  searchParams: Record<string, string>;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const companies = await getCompanies();
  const seminarList = await getSeminarsGroupedByDay();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Content
        seminarList={seminarList}
        companies={companies?.list}
        companyId={searchParams?.companyId ? Number(searchParams.companyId) : 0}
      />
    </>
  );
}
