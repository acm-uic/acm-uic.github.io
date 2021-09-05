import React from "react";
import useSWR from "swr";
import { getEvents, CalendarEventDateTime } from "../../util/getEvents";
import { googleCalendarApiKey as apiKey, googleCalendarId as calendarId } from "../../config";

export type EventsAgendaProps = Record<string, never>;

const timePeriodFormatter = (start: CalendarEventDateTime, end: CalendarEventDateTime): [string, string] => {
  const datesAreOnSameDay = (first: Date, second: Date) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  const dateFormatter = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "2-digit" });
  const timeFormatter = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "numeric" });
  const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
  let startString: string = "format error";
  let endString: string = "format error";
  if (start.date) {
    startString = dateFormatter.format(new Date(start.date));
  }
  if (start.dateTime) {
    startString = dateTimeFormatter.format(new Date(start.dateTime));
  }
  if (end.date) {
    endString = dateFormatter.format(new Date(end.date));
  }
  if (end.dateTime) {
    if (start.dateTime) {
      const _startDate = new Date(start.dateTime);
      const _endDate = new Date(end.dateTime);
      if (datesAreOnSameDay(_startDate, _endDate)) {
        endString = timeFormatter.format(_endDate);
      }
    }
  }
  return [startString, endString];
};

export const EventsAgenda: React.FC<EventsAgendaProps> = () => {
  const { data, error } = useSWR(undefined, () => getEvents(apiKey, calendarId));

  if (error) {
    return <div>failed to load events</div>;
  }
  if (!data) {
    return <div>loading events...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text--center">
          <h2>📅 Upcoming Events</h2>
        </div>
      </div>
      <div className="row">
        {data.items.map((event) => {
          const [startString, endString] = timePeriodFormatter(event.start, event.end);
          return (
            <div className="col col--4">
              <div className="card margin--xs">
                <div className="card__header">
                  <h3>{event.summary}</h3>
                </div>
                <div className="card__body">
                  <div>
                    ⌚ {startString} ➡ {endString}
                  </div>
                  {event.location && <div>📍 {event.location}</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        <a
          href="https://calendar.google.com/calendar/u/0/embed?src=kc72g1ctfg8b88df34qqb62d1s@group.calendar.google.com"
          target="_blank"
          rel="noreferrer"
        >
          View calendar
        </a>
      </div>
    </div>
  );
};

export default EventsAgenda;
