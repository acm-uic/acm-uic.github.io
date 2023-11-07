import React from "react";
import Link from "@docusaurus/Link";
import { config } from "../../../appConfig";

export type YouTubeLinkProps = {
  showLink?: boolean;
};

export const YouTubeLink = ({ showLink, children }: React.PropsWithChildren<YouTubeLinkProps>) => (
  <Link to={config.youTubeChannelLink}>
    <div>{showLink ? config.youTubeChannelLink : children}</div>
  </Link>
);
