import { CompanyLogos, Footer } from '@/modules/home/_sections';
import { NavBar } from '@/shared/components/navbar';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <CompanyLogos />
      </main>
      <Footer />
    </>
  );
}
