import React from "react";
import Link from "@docusaurus/Link";
import config from "../../../appConfig";

export type SlackSignUpLinkProps = {
  showLink?: boolean;
};

export const SlackSignUpLink: React.FC<SlackSignUpLinkProps> = ({ showLink, children }) => (
  <Link to={config.slackWorkspaceSignUpLink}>{showLink ? config.slackWorkspaceSignUpLink : children}</Link>
);
