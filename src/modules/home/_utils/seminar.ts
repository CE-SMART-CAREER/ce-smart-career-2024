import dayjs from 'dayjs';
import type { SeminarSlot, SeminarDay } from '../_types';
import { getCompanies, getSeminars } from '../_services';

export async function getSeminarsGroupedByDay(): Promise<SeminarDay[]> {
  const seminarList: SeminarDay[] = [];
  const seminarDBList = await getSeminars().then((res) => res.list);
  const companyDBList = await getCompanies().then((res) => res.list);

  seminarDBList?.forEach((seminar) => {
    if (!dayjs(seminar.startAt).isValid() || !dayjs(seminar.endAt).isValid()) {
      return;
    }

    const companyName = companyDBList.find(
      (c) => c.Id == seminar.company?.Id,
    )?.name;
    if (!companyName) {
      return;
    }

    const seminarDate = seminar.startAt.split(' ')[0];
    let seminarDay = seminarList.find((day) => day.date === seminarDate);
    if (!seminarDay) {
      seminarDay = { date: seminarDate, seminars: [] };
      seminarList.push(seminarDay);
    }

    const existingSeminars = seminarDay.seminars.filter(
      (s) => s.startAt === seminar.startAt && s.endAt === seminar.endAt,
    );

    if (existingSeminars.length === 0) {
      const newSeminar: SeminarSlot = {
        startAt: seminar.startAt,
        endAt: seminar.endAt,
        room1: seminar.room === 1 ? companyName : '',
        room2: seminar.room === 2 ? companyName : '',
      };

      seminarDay.seminars.push(newSeminar);
    } else if (existingSeminars.length === 1) {
      const roomKey = `room${seminar.room}` as 'room1' | 'room2';
      existingSeminars[0][roomKey] = companyName;
    }
  });

  return seminarList;
}
