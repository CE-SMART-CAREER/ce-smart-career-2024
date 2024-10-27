import { endpoints } from '@/shared/configs/endpoints';
import { CONFIG } from '@/global-config';

export async function getCompanies() {
  const response = await fetch(`${endpoints.company.records}`, {
    headers: {
      'xc-token': `${CONFIG.nocodb.token}`,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}
