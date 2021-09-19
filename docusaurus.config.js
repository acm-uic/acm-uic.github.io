// @ts-check

const {
  config: { discordServerId, discordServerInviteLink, slackWorkspaceSignUpLink },
} = require("./appConfig"); // eslint-disable-line @typescript-eslint/no-var-requires

const gitHubOrg = "acm-uic";
const gitHubRepoName = "acm-uic.github.io";
const gitHubOrgUrl = `https://github.com/${gitHubOrg}`;
const gitHubRepoUrl = `${gitHubOrgUrl}/${gitHubRepoName}`;
const gitHubRepoDefaultBranch = "main";
const gitHubPagesUrl = `https://${gitHubRepoName}`;

/**
 *
 * @param {string} url
 * @param {string} alt
 * @returns {string}
 */
const getImageHtml = (url, alt) => `
<img alt="${alt}" src="${url}"></img>
`;

/**
 *
 * @param {string} link
 * @param {string} innerHtml
 * @returns {{html: string}}
 */
const footerExternalLink = (link, innerHtml) => ({
  html: `
      <a class="footer__link-item" href="${link}" target="_blank" rel="noreferrer noopener" aria-label="ACM@UIC Discord Server">
       ${innerHtml} 
      </a>
    `,
});

/** @type {Partial<import('@docusaurus/types').DocusaurusConfig>} */
const config = {
  title: "ACM@UIC",
  tagline: "Association for Computing Machinery Student Chapter at University of Illinois at Chicago",
  url: gitHubPagesUrl,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: gitHubOrg,
  projectName: gitHubRepoName, // Usually your repo name.
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "ACM@UIC",
        src: "img/logo.png",
      },
      items: [
        // left items
        { to: "/", label: "Home", position: "left" },
        { to: "/blog", label: "Announcements", position: "left" },
        {
          to: "/sigs/overview",
          position: "left",
          label: "SIGs",
        },
        {
          type: "doc",
          position: "left",
          docId: "introduction",
          label: "Docs",
        },
        {
          label: "About",
          position: "left",
          href: "/about",
        },
        {
          label: "Join ACM",
          position: "left",
          href: "/join",
        },
        // right items
        {
          href: discordServerInviteLink,
          label: "Discord",
          position: "right",
        },
        {
          href: gitHubRepoUrl,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/introduction",
            },
            {
              label: "SIGs",
              to: "/sigs/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // Discord
            {
              link: discordServerInviteLink,
              innerHtml: getImageHtml(
                `https://img.shields.io/discord/${discordServerId}?label=Discord&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2`,
                "Discord"
              ),
            },
            // Slack
            {
              link: slackWorkspaceSignUpLink,
              innerHtml: getImageHtml("https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white", "Slack"),
            },
            // GitHub
            {
              link: gitHubOrgUrl,
              innerHtml: getImageHtml(
                "https://img.shields.io/badge/GitHub-24292e?logo=github&logoColor=white",
                "GitHub"
              ),
            },
          ].map(({ link, innerHtml }) => footerExternalLink(link, innerHtml)),
        },
        {
          title: "More",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Join ACM",
              to: "/join",
            },
            { label: "Contact us", to: "/contact" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ACM@UIC. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./src/sidebars/docsSidebar.js"),
          editUrl: `${gitHubRepoUrl}/edit/${gitHubRepoDefaultBranch}/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${gitHubRepoUrl}/edit/${gitHubRepoDefaultBranch}/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sigs",
        path: "SIGs",
        routeBasePath: "sigs",
        sidebarPath: require.resolve("./src/sidebars/sigsSidebar.js"),
      },
    ],
  ],
};

exports.default = config;
module.exports = config;
