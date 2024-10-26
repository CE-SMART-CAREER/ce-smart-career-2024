import { Seminar, SeminarData, SeminarDay } from "../../../shared/types/seminar-data";

export function createSeminarList(data: SeminarData[]): SeminarDay[] {
    const seminarList: SeminarDay[] = [];
  
    data.forEach((seminar) => {
      const seminarDate = seminar.startAt.split('T')[0];
  
      let seminarDay = seminarList.find(day => day.date === seminarDate);
      if (!seminarDay) {
        seminarDay = { date: seminarDate, seminars: [] };
        seminarList.push(seminarDay);
      }
  
      let existingSeminars = seminarDay.seminars.filter(s => s.startAt === seminar.startAt && s.endAt === seminar.endAt);
  
      if (existingSeminars.length === 0) {
        const newSeminar: Seminar = {
          startAt: seminar.startAt,
          endAt: seminar.endAt,
          room1: seminar.room === 1 ? seminar.company : "",
          room2: seminar.room === 2 ? seminar.company : "",
        };
        
        seminarDay.seminars.push(newSeminar);
      } else if (existingSeminars.length === 1) {
        const existingSeminar = existingSeminars[0];
  
        if (seminar.room === 1) {
          existingSeminar.room1 = seminar.company;
        } else if (seminar.room === 2) {
          existingSeminar.room2 = seminar.company;
        }
      }
    });
  
    return seminarList;
  }