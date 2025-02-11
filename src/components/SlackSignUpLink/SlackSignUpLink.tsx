import React from "react";
import Link from "@docusaurus/Link";
import appConfig from "../../../appConfig";

export type SlackSignUpLinkProps = {
  showLink?: boolean;
};

export const SlackSignUpLink = ({ showLink, children }: React.PropsWithChildren<SlackSignUpLinkProps>) => (
  <Link to={appConfig.slackWorkspaceSignUpLink}>
    <span>{showLink ? appConfig.slackWorkspaceSignUpLink : children}</span>
  </Link>
);
