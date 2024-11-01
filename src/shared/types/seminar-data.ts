export type SeminarData = {
  id: string;
  startAt: string;
  endAt: string;
  company: string;
  room: number;
};

export type Seminar = {
  startAt: string;
  endAt: string;
  room1: string;
  room2: string;
};

export type SeminarDay = {
  date: string;
  seminars: Seminar[];
};
