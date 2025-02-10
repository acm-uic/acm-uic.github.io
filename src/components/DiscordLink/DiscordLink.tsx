import React from "react";
import Link from "@docusaurus/Link";
import appConfig from "../../../appConfig";

export type DiscordLinkProps = {
  showLink?: boolean;
};

export const DiscordLink = ({ showLink, children }: React.PropsWithChildren<DiscordLinkProps>) => (
  <Link to={appConfig.discordServerInviteLink}>
    <span>{showLink ? appConfig.discordServerInviteLink : children}</span>
  </Link>
);
