export type ConfigValue = {
  env: 'development' | 'production' | 'test';
  nocodb: {
    apiUrl: string;
    token: string;
  };
};

export const CONFIG: ConfigValue = {
  env: process.env.NODE_ENV,
  nocodb: {
    apiUrl: process.env.DATABASE_API_URL ?? '',
    token: process.env.DATABASE_API_TOKEN ?? '',
  },
};
