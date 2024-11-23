import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ActiveSectionStore = {
  currentSection: string;
  actions: {
    setCurrentSection: (currentSection: string) => void;
  };
};

export const useCurrentSectionStore = create<ActiveSectionStore>()(
  devtools((set) => ({
    currentSection: 'about',
    actions: {
      setCurrentSection: (currentSection: string) => set({ currentSection }),
    },
  })),
);
