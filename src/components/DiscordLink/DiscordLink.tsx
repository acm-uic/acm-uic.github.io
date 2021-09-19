import React from "react";
import Link from "@docusaurus/Link";
import config from "../../../appConfig";

export type DiscordLinkProps = {
  showLink?: boolean;
};

export const DiscordLink: React.FC<DiscordLinkProps> = ({ showLink, children }) => (
  <Link to={config.discordServerLink}>{showLink ? config.discordServerLink : children}</Link>
);
