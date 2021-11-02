/* global gapi */
/// <reference types="gapi.client.calendar" />

export type CalendarEvent = gapi.client.calendar.Event;
export type CalendarEventDateTime = gapi.client.calendar.EventDateTime;
export type CalendarEventsResponse = gapi.client.calendar.Events;

/**
 * milliseconds in a year
 */
const A_YEAR = 1000 * 3600 * 24 * 365;

/**
 * Get events list for a specific calendar from google calendar api.
 * Events in the past and a year from "now" are filtered and recurring events are expanded into single events.
 * @param apiKey Google Calendar API Key
 * @param calendarId Google Calendar ID
 * @returns Google Calendar Events
 */
export const getEvents = async (apiKey: string, calendarId: string): Promise<CalendarEventsResponse> => {
  const calendarRequestParams: Record<string, string> = {
    singleEvents: "true",
    key: apiKey,
    timeMin: new Date().toISOString(),
    timeMax: new Date(+Date.now() + A_YEAR).toISOString(),
    maxResults: "9",
    orderBy: "startTime",
  };
  const calendarResponse = await fetch(
    `https://content.googleapis.com/calendar/v3/calendars/${calendarId}/events?${new URLSearchParams(
      calendarRequestParams
    ).toString()}`
  );
  const calendarData = await calendarResponse.json();
  return calendarData;
};

export default getEvents;
