type Seminar = {
  startAt: string;
  endAt: string;
  room: number;
};

export type CompanyInfo = {
  Id: number;
  name: string;
  description: string;
  link: string;
  logo: string;
  date: string;
  type: string;
  nc_pejk___seminar_id: number;
  seminar: Seminar | null;
};
