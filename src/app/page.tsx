import { CompanyLogos } from '@/modules/home/_sections';
import NavBar from '../shared/components/navbar/navbar';
import nav_tabs from '@/shared/components/navbar/_constants/nav-tabs';

export default function Home() {
  return (
    <>
      <header>
        <NavBar items={nav_tabs} />
      </header>
      <main>
        <CompanyLogos />
      </main>
      <footer></footer>
    </>
  );
}
