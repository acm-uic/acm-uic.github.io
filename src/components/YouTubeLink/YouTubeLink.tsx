import React from "react";
import Link from "@docusaurus/Link";
import appConfig from "../../../appConfig";

export type YouTubeLinkProps = {
  showLink?: boolean;
};

export const YouTubeLink = ({ showLink, children }: React.PropsWithChildren<YouTubeLinkProps>) => (
  <Link to={appConfig.youTubeChannelLink}>
    <div>{showLink ? appConfig.youTubeChannelLink : children}</div>
  </Link>
);
