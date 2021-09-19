import React from "react";
import Head from "@docusaurus/Head";
import config from "../../../appConfig";

export const DiscordRedirect: React.FC = () => (
  <Head>
    <meta httpEquiv="refresh" content={`5; URL=${config.discordServerLink}`} />
  </Head>
);
