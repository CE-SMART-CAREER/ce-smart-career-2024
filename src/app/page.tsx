import { Location } from '@/modules/home/_sections';
import { Seminar } from '@/modules/home/_sections';
import { CompanyLogos } from '@/modules/home/_sections';

export default function Home() {
  return (
    <>
      <header></header>
      <main>
        <Location />
        <Seminar />
        <CompanyLogos />
      </main>
      <footer></footer>
    </>
  );
}
