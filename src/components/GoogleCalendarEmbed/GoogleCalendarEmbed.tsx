import React from "react";
import clsx from "clsx";
import styles from "./GoogleCalendarEmbed.module.css";
import { config } from "../../../appConfig";

export type GoogleCalendarEmbedProps = Record<string, never>;

export const GoogleCalendarEmbed: React.FC<GoogleCalendarEmbedProps> = () => (
  <>
    <div className="container">
      <div className="row">
        <div className={clsx("text--center", styles.title)}>
          <h2>Events Calendar</h2>
        </div>
      </div>
      <div className="row">
        <iframe
          title="ACM@UIC Google Calendar"
          className={clsx(styles.calendar)}
          src={config.googleCalendarLink}
          width="100%"
          height="600"
          scrolling="no"
        />
      </div>
    </div>
  </>
);

export default GoogleCalendarEmbed;
