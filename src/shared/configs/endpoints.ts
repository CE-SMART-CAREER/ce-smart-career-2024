import { CONFIG } from '@/global-config';

const baseURL = CONFIG.nocodb.apiUrl;

const ROOTS = {
  COMPANY: `${baseURL}/${CONFIG.nocodb.companyDb}`,
  SEMINAR: `${baseURL}/${CONFIG.nocodb.seminarDb}`,
};

export const endpoints = {
  company: {
    records: `${ROOTS.COMPANY}/records?limit=1000`,
  },
  seminar: {
    records: `${ROOTS.SEMINAR}/records?limit=1000`,
  },
};
