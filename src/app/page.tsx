import {
  CompanyLogos,
  Footer,
  Location,
  Seminar,
} from '@/modules/home/_sections';
import { NavBar } from '@/shared/components/navbar';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Seminar />
        <CompanyLogos />
        <Location />
      </main>
      <Footer />
    </>
  );
}
