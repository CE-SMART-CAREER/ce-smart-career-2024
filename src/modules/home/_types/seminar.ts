export type Seminar = {
  Id: number;
  CreatedAt: string;
  UpdatedAt: string;
  startAt: string;
  endAt: string;
  company: { Id: number };
  room: number;
};

export type SeminarSlot = {
  startAt: string;
  endAt: string;
  room1: string;
  room2: string;
};

export type SeminarDay = {
  date: string;
  seminars: SeminarSlot[];
};
