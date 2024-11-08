import { CONFIG } from '@/global-config';

const baseURL = CONFIG.nocodb.apiUrl;

const ROOTS = {
  COMPANY: `${baseURL}/mfmvjx4x38tca0o`,
  SEMINAR: `${baseURL}/mwq1zx2p3ocwxnf`,
};

export const endpoints = {
  company: {
    records: `${ROOTS.COMPANY}/records`,
  },
  seminar: {
    records: `${ROOTS.SEMINAR}/records`,
  },
};
