# Calendar Event Location

We do some special parsing of the location field from a calendar event.

## Website

Repository: [acm-uic/acm-uic.github.io](https://github.com/acm-uic/acm-uic.github.io)

When the event location starts with "Discord Voice:" or "Discord Stage:" followed with the voice or stage channel name
(example: "Discord Voice: SIG SysAdmin"), the location will be converted to a link (invite link) to the server with the
text of the voice channel.

Example:

![event with discord voice location displayed on the website](/media/calendar-event-location-website.png)
![calendar event details with discord voice location](/media/calendar-event-location-gcal.png)

## Discord Events Sync

:::info

This project is under active development.

:::

Repository: [acm-uic/discord-events-sync](https://github.com/acm-uic/discord-events-sync)

The project syncs events from Google calendar to Discord.

It uses the same location prefixing logic
as the website. Event locations beginning with "Discord Voice:" or "Discord Stage:" will be created and link to the
appropriate voice channel when syncing.

Events that do not match will include the location as text and Discord event's type will be set to "Somewhere else".
