import React from "react";
import Head from "@docusaurus/Head";
import appConfig from "../../../appConfig";

export type YouTubeRedirectProps = {
  delay?: number;
};

export const YouTubeRedirect: React.FC<YouTubeRedirectProps> = ({ delay }) => (
  <Head>
    <meta httpEquiv="refresh" content={`${delay ?? 5}; URL=${appConfig.youTubeChannelLink}`} />
  </Head>
);
