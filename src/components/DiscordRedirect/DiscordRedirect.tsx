import React from "react";
import Head from "@docusaurus/Head";
import appConfig from "../../../appConfig";

export type DiscordRedirectProps = {
  delay?: number;
};

export const DiscordRedirect: React.FC<DiscordRedirectProps> = ({ delay }) => (
  <Head>
    <meta httpEquiv="refresh" content={`${delay ?? 5}; URL=${appConfig.discordServerInviteLink}`} />
  </Head>
);
