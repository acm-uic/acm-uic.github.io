import * as React from "react";

type DiscordUser = {
  id: string;
  username: string;
  avatar: string;
  global_name: string;
  public_flags: number;
  bot: boolean;
};

type DiscordAttachment = {
  id: string;
  filename: string;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  content_type?: string;
};

type DiscordAnnouncement = {
  id: string;
  channel_id: string;
  author: DiscordUser;
  content: string;
  timestamp: string;
  attachments: DiscordAttachment[];
};

type DiscordAnnouncementsProps = { announcements: DiscordAnnouncement[] };

export const DiscordAnnouncements: React.FC<DiscordAnnouncementsProps> = ({ announcements }) => {
  return (
    <div>
      {announcements.map((announcement) => (
        <div key={announcement.id}>{JSON.stringify(announcement)}</div>
      ))}
    </div>
  );
};
