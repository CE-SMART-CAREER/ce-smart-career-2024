import { endpoints } from '@/shared/configs';
import { CONFIG } from '@/global-config';
import type { CompanyInfo, NocoDbResponse } from '../_types';

export async function getCompanies(): Promise<NocoDbResponse<CompanyInfo>> {
  const response = await fetch(endpoints.company.records, {
    headers: {
      'xc-token': `${CONFIG.nocodb.token}`,
    },
  });

  return response.json();
}
