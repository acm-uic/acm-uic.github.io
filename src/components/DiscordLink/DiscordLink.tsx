import React from "react";
import Link from "@docusaurus/Link";
import { config } from "../../../appConfig";

export type DiscordLinkProps = {
  showLink?: boolean;
};

export const DiscordLink = ({ showLink, children }: React.PropsWithChildren<DiscordLinkProps>) => (
  <Link to={config.discordServerInviteLink}>
    <span>{showLink ? config.discordServerInviteLink : children}</span>
  </Link>
);
