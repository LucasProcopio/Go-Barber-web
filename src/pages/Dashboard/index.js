import React, { useState, useMemo, useEffect } from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import api from '~/services/api';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setschedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'MMMM d'), [date]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });
      console.tron.log(response);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const formattedDate = setSeconds(
          setMinutes(setHours(date, hour), 0),
          0
        );
        const compareDate = utcToZonedTime(formattedDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.appointment.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });
      setschedule(data);
    }

    loadSchedule();
  }, [date]);

  function handleAddDays() {
    setDate(addDays(date, 1));
  }

  function handleRemoveDays() {
    setDate(subDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleRemoveDays}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleAddDays}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Open'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
