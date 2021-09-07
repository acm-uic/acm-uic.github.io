import React from "react";
import Link from "@docusaurus/Link";
import useSWR from "swr";
import { getEvents, CalendarEventDateTime } from "../../util/getEvents";
import { googleCalendarApiKey as apiKey, googleCalendarId as calendarId } from "../../config";

const ALL_DAY_EVENT = "All Day";
const A_DAY = 1000 * 3600 * 24;

export type EventsAgendaProps = Record<string, never>;

const timePeriodFormatter = (start: CalendarEventDateTime, end: CalendarEventDateTime): string => {
  const datesAreOnSameDay = (first: Date, second: Date): boolean =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  const isAllDayEvent = (_start: Date, _end: Date) => _end.getTime() - _start.getTime() === A_DAY;

  const dateFormatter = new Intl.DateTimeFormat("en-us", { day: "numeric", month: "short", weekday: "short" });
  const timeFormatter = new Intl.DateTimeFormat("en-us", { hour: "numeric", minute: "numeric" });
  const dateTimeFormatter = new Intl.DateTimeFormat("en-us", {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
  if (start.date && end.date) {
    const startParsed = new Date(start.date);
    const endParsed = new Date(end.date);
    if (isAllDayEvent(startParsed, endParsed)) {
      return `${dateFormatter.format(startParsed)} ${ALL_DAY_EVENT}`;
    }
    return `${dateFormatter.format(startParsed)} ➡ ${dateFormatter.format(endParsed)}`;
  }
  if (start.dateTime && end.dateTime) {
    const startParsed = new Date(start.dateTime);
    const endParsed = new Date(end.dateTime);
    if (datesAreOnSameDay(startParsed, endParsed)) {
      return `${dateFormatter.format(startParsed)} ${timeFormatter.format(startParsed)} ➡ ${timeFormatter.format(
        endParsed
      )}`;
    }
    return `${dateTimeFormatter.format(startParsed)} ➡ ${dateTimeFormatter.format(endParsed)}`;
  }
};

export const EventsAgenda: React.FC<EventsAgendaProps> = () => {
  const { data, error } = useSWR("/", () => getEvents(apiKey, calendarId));

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
        {data.items.map((event, eventIndex) => (
          <div className="col col--4" key={`${eventIndex}-${event.id}`}>
            <div className="card margin--xs">
              <div className="card__header">
                <h3>{event.summary}</h3>
              </div>
              <div className="card__body">
                <div>⌚ {timePeriodFormatter(event.start, event.end)}</div>
                {event.location && <div>📍 {event.location}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <Link to="/calendar">View calendar</Link>
      </div>
    </div>
  );
};

export default EventsAgenda;
