export type DiscordStatusType = "idle" | "dnd" | "online" | "offline" | "invisbile";

export interface DiscordChannel {
  id: string;
  name: string;
  position: number;
}

export interface DiscordMember {
  avatar: string | null;
  // eslint-disable-next-line camelcase
  avatar_url: string;
  discriminator: string;
  id: string;
  status: DiscordStatusType;
  username: string;
}

export interface DiscordWidgetApiResponse {
  channels: DiscordChannel[];
  id: string;
  // eslint-disable-next-line camelcase
  instant_invite: string;
  members: DiscordMember[];
  name: string;
  // eslint-disable-next-line camelcase
  presence_count: number;
}

/**
 * Get Discord widget API response for a server.
 * @param serverId Discord server/guid id
 * @returns Discord Widget api response
 */
export const getDiscordWidgetApi = async (serverId: string): Promise<DiscordWidgetApiResponse> => {
  const res = await fetch(`https://discord.com/api/guilds/${serverId}/widget.json`);
  const data = (await res.json()) as DiscordWidgetApiResponse;
  return data;
};
