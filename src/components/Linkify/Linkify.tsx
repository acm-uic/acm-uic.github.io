import * as React from 'react';
import Linkify from "linkify-react";

const LinkifyWithOpts = ({ children }) => (
  <Linkify options={{ target: "_blank", rel: "noopener noreferer" }}>{children}</Linkify>
);

export {LinkifyWithOpts as Linkify};
