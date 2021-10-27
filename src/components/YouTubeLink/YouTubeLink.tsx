import React from "react";
import Link from "@docusaurus/Link";
import { config } from "../../../appConfig";

export type YouTubeLinkProps = {
  showLink?: boolean;
};

export const YouTubeLink: React.FC<YouTubeLinkProps> = ({ showLink, children }) => (
  <Link to={config.youTubeChannelLink}>{showLink ? config.youTubeChannelLink : children}</Link>
);
