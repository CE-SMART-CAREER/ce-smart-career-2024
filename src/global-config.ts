export type ConfigValue = {
  env: 'development' | 'production' | 'test';
  nocodb: {
    apiUrl: string;
    token: string;
    companyDb: string;
    seminarDb: string;
  };
};

export const CONFIG: ConfigValue = {
  env: process.env.NODE_ENV,
  nocodb: {
    apiUrl: process.env.NOCODB_API_URL ?? '',
    token: process.env.NOCODB_API_TOKEN ?? '',
    companyDb: process.env.NOCODB_COMPANY_DB ?? '',
    seminarDb: process.env.NOCODB_SEMINAR_DB ?? '',
  },
};
