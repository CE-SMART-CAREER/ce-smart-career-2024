import { endpoints } from '@/shared/configs';
import { CONFIG } from '@/global-config';
import type { Company, NocoDbResponse, Seminar } from '../_types';

const baseHeader = {
  'xc-token': CONFIG.nocodb.token,
};

export async function getCompanies(): Promise<NocoDbResponse<Company>> {
  const response = await fetch(endpoints.company.records, {
    headers: baseHeader,
  });

  return response.json();
}

export async function getSeminars(): Promise<NocoDbResponse<Seminar>> {
  const response = await fetch(endpoints.seminar.records, {
    headers: baseHeader,
  });

  return response.json();
}
