import React from "react";
import clsx from "clsx";
import styles from "./GoogleCalendarEmbed.module.css";

export type GoogleCalendarEmbedProps = Record<string, never>;

export const GoogleCalendarEmbed: React.FC<GoogleCalendarEmbedProps> = () => (
  <>
    <div className="container">
      <div className="row">
        <div className={clsx("col text--center", styles.title)}>
          <h2>Events Calendar</h2>
        </div>
      </div>
      <div className="row">
        <iframe
          title="ACM@UIC Google Calendar"
          className={clsx(styles.calendar)}
          src="https://calendar.google.com/calendar/embed?src=kc72g1ctfg8b88df34qqb62d1s%40group.calendar.google.com"
          width="800"
          height="600"
          scrolling="no"
        />
      </div>
    </div>
  </>
);

export default GoogleCalendarEmbed;
