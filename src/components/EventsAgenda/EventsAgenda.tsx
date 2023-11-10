import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./EventsAgenda.module.css";
import { Linkify } from "../Linkify";
import { CalendarEventDateTime, CalendarEvent, CalendarEventsResponse } from "../../util/getEvents";
import { DiscordChannel } from "../../util/getDiscordWidgetApi";
import { config } from "../../../appConfig";

const ALL_DAY_EVENT = "All Day";
const A_DAY = 1000 * 3600 * 24;

export type EventsAgendaProps = {
  /**
   * Number of events to show
   */
  viewCount: number;
  events: CalendarEventsResponse;
  channels: DiscordChannel[];
};

const timePeriodFormatter = (start: CalendarEventDateTime, end: CalendarEventDateTime): string => {
  const datesAreOnSameDay = (first: Date, second: Date): boolean =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  const isAllDayEvent = (_start: Date, _end: Date): boolean => _end.getTime() - _start.getTime() === A_DAY;

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
  return ``;
};

const locationFormatter = (channels: DiscordChannel[], location: string): JSX.Element => {
  if (location.match(/^Discord ((Voice)|(Stage)):/i)) {
    const parsedLocation = location.replace(/^Discord ((Voice)|(Stage)):/i, "").trim();
    const channel = channels.find((c) => c.name.includes(parsedLocation));
    if (channel) {
      return (
        <Link to={config.discordServerInviteLink}>
          <img src="/media/Discord-Logo-Color.svg" alt="Discord" className={clsx(styles.discordIcon)} /> {channel.name}
        </Link>
      );
    }
  }

  return <Linkify>📍 {location}</Linkify>;
};

interface EventsAgendaItemProps {
  event: CalendarEvent;
  channels?: DiscordChannel[];
}

const EventsAgendaItem: React.FC<EventsAgendaItemProps> = ({ event, channels }) => (
  <div className="col col--4">
    <div className={clsx(styles.eventCard, "card margin--xs")}>
      <div className="card__header">
        <h3>{event.summary}</h3>
      </div>
      <div className="card__body">
        <div>⌚ {timePeriodFormatter(event.start, event.end)}</div>
        {event.location && (
          <div>
            {!channels ? (
              <Linkify>📍 {event.location}</Linkify>
            ) : (
              locationFormatter(channels, event.location)
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);


export const EventsAgenda: React.FC<EventsAgendaProps> = ({ viewCount, channels, events }) => (
    <div className={clsx(styles.eventsContainer, "container")}>
      <div className="row">
        <div className="col text--center">
          <h2>📅 Upcoming Events</h2>
        </div>
      </div>
      <div className={clsx(styles.eventsRow, "row")}>
        { events &&
          events.items?.length !== 0 &&
          events.items
            ?.filter((e) => e.visibility !== "private")
            .slice(0, viewCount)
            .map((event, index) => (
              <EventsAgendaItem key={`${index}-${event?.id}`} event={event} channels={channels} />
            ))}
      </div>
      <div className="row row--no-gutters">
        <div className="margin-top--lg margin-bottom--lg button button--outline button--secondary">
          <Link to="/calendar">View Full calendar</Link>
        </div>
      </div>
    </div>
  );

export default EventsAgenda;
