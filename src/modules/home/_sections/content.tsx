'use client';

import {
  CompanyLogos,
  Description,
  Footer,
  Introduction,
  Location,
  Seminar,
} from '@/modules/home/_sections';
import type { Company, SeminarDay } from '../_types';
import { useCurrentSectionStore } from '../_store/current-section';
import ObserverSection from './observer-section';

type Props = {
  companyId: number;
  companies: Company[];
  seminarList: SeminarDay[];
};

export default function Content({ companyId, companies, seminarList }: Props) {
  const { setCurrentSection } = useCurrentSectionStore(
    (state) => state.actions,
  );

  const setInView = (inView: boolean, entry: IntersectionObserverEntry) => {
    if (inView) {
      const sectionId = entry.target.getAttribute('id');

      if (sectionId) {
        setCurrentSection(sectionId);
      }
    }
  };

  return (
    <>
      <main>
        <Introduction />
        <ObserverSection id="about" onChange={setInView}>
          <Description />
        </ObserverSection>
        <ObserverSection id="seminar" onChange={setInView}>
          <Seminar seminarList={seminarList} />
        </ObserverSection>
        <ObserverSection id="companies" onChange={setInView}>
          <CompanyLogos companies={companies} selectedCompanyId={companyId} />
        </ObserverSection>
        <ObserverSection id="locations" onChange={setInView}>
          <Location companies={companies} />
        </ObserverSection>
      </main>
      <Footer />
    </>
  );
}
