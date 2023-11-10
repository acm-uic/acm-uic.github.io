import * as React from "react";
import { DiscordMarkdown } from "./DiscordMarkdown";

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
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'America/Chicago',
  });
  return (
    <div>
        <div>
          <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <section className="flex flex-col flex-1 border-l border-r border-gray-200 dark:border-gray-700">
              <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="font-semibold text-gray-800 dark:text-gray-200"># announcements</h2>
              </header>
              <main className="flex-1 overflow-y-auto p-4 space-y-4">
              {announcements.map((announcement) => (
                <div className="flex space-x-3"  key={announcement.id}>
                  <img
                    alt="Avatar"
                    className="rounded-full h-[40px]"
                    height="40"
                    src={`https://cdn.discordapp.com/avatars/${announcement.author.id}/${announcement.author.avatar}.webp?desired_size=40`}
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{announcement.author.global_name}</span>
                      <time className="text-xs text-gray-500 dark:text-gray-400">{dateTimeFormat.format(new Date(announcement.timestamp))}</time>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">
                      <DiscordMarkdown content={announcement.content} />
                    </p>
                    {announcement.attachments && announcement.attachments.length ? announcement.attachments.map(attachment => <img
                        key={attachment.id}
                        alt="Attached"
                        className="mt-2 rounded-md"
                        height="200"
                        src={attachment.url}
                        style={{
                          aspectRatio: "200/200",
                          objectFit: "cover",
                        }}
                        width="200"
                      />) : null}
                  </div>
                </div>
      ))}
      </main>
            </section>
          </div>
        </div>
    </div>
  );
};
