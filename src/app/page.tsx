import { CompanyLogos } from '@/modules/home/_sections';
import NavBar from './navbar';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <CompanyLogos />
      </main>
      <footer></footer>
    </>
  );
}
