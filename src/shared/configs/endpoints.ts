import { CONFIG } from '@/global-config';

const baseURL = CONFIG.nocodb.apiUrl;

const ROOTS = {
  COMPANY: 'mfmvjx4x38tca0o',
  SEMINAR: 'vwena4xyonf4csiuv',
};

export const endpoints = {
  company: {
    records: `${baseURL}/${ROOTS.COMPANY}/records`,
  },

  seminar: {
    records: `${baseURL}/${ROOTS.SEMINAR}/records`,
  },
};
