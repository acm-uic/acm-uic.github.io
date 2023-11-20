// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
const {
  config: { discordServerId, discordServerInviteLink, slackWorkspaceSignUpLink, youTubeChannelLink },
} = require("./appConfig");

const gitHubOrg = "acm-uic";
const gitHubRepoName = "acm-uic.github.io";
const gitHubOrgUrl = `https://github.com/${gitHubOrg}`;
const gitHubRepoUrl = `${gitHubOrgUrl}/${gitHubRepoName}`;
const gitHubRepoDefaultBranch = "main";
const gitHubPagesUrl = `https://${gitHubRepoName}`;
const typesenseHost = "typesense.acmuic.org";
const typesenseKey = "QRerr6QNQ96HpqBaof6yPinG7fnq11bs"; // key with search-only permissions
const typesenseCollectionName = "docusaurus-2";

/**
 *
 * @param {string} link
 * @param {string} imageUrl
 * @param {string} ariaLabel
 * @returns {{html: string}}
 */
const footerExternalLink = (link, imageUrl, ariaLabel) => ({
  html: `
<a class="footer__link-item" href="${link}" target="_blank" rel="noreferrer noopener" aria-label="${ariaLabel}">
  <img alt="" role="presentation" src="${imageUrl}"></img>
</a>
    `,
});

/** @type {import('@docusaurus/types').Config} */
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
  themes: ["docusaurus-theme-search-typesense"],
  scripts: [
    {
      src: "https://plausible.acmuic.org/js/script.js",
      async: true,
      defer: true,
      "data-domain": "acm.cs.uic.edu",
    },
  ],
  themeConfig:
    /** @type {import('docusaurus-theme-search-typesense').ThemeConfig} */
    ({
      typesense: {
        typesenseCollectionName,
        typesenseServerConfig: {
          nodes: [
            {
              host: typesenseHost,
              port: 443,
              protocol: "https",
            },
          ],
          apiKey: typesenseKey,
        },
        typesenseSearchParameters: {},
        searchPagePath: "/search",
        contextualSearch: true,
      },
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
          { to: "/", label: "Home", position: "left", exact: true },
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
            type: "dropdown",
            items: [
              {
                label: "About ACM",
                href: "/about",
              },
              {
                label: "Join",
                href: "/join",
              },
              {
                label: "Officers",
                href: "/officers",
              },
              { label: "Contact", href: "/contact" },
            ],
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
            title: "Internal",
            items: [
              {
                label: "Docs",
                to: "/docs/introduction",
              },
              {
                label: "SIGs",
                to: "/sigs/overview",
              },
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
          {
            title: "Community",
            items: [
              // Discord
              {
                link: discordServerInviteLink,
                imageUrl: `https://img.shields.io/discord/${discordServerId}?label=Discord&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2`,
                ariaLabel: "ACM@UIC Discord server",
              },
              // Slack
              {
                link: slackWorkspaceSignUpLink,
                imageUrl: "https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white",
                ariaLabel: "ACM@UIC Slack workspace",
              },
              // GitHub
              {
                link: gitHubOrgUrl,
                imageUrl: "https://img.shields.io/badge/GitHub-24292e?logo=github&logoColor=white",
                ariaLabel: "ACM@UIC GitHub organization",
              },
              // YouTube
              {
                link: youTubeChannelLink,
                imageUrl: "https://img.shields.io/badge/YouTube-c4302b?logo=youtube&logoColor=white",
                ariaLabel: "ACM@UIC YouTube channel",
              },
            ].map(({ link, imageUrl, ariaLabel }) => footerExternalLink(link, imageUrl, ariaLabel)),
          },
          {
            title: "Services",
            items: [
              {
                label: "Mail",
                to: "https://acm.cs.uic.edu/acmmail",
              },
              {
                label: "Wiki",
                to: "https://acm.cs.uic.edu/wiki",
              },
            ],
          },
          {
            title: "External",
            items: [
              { label: "Flourish", to: "https://flourishconf.com" },
              {
                label: "LUG",
                to: "https://lug.cs.uic.edu",
              },
              {
                label: "LOGICA",
                to: "https://logica.students.uic.edu",
              },
              {
                label: "WiCS",
                to: "https://wics.students.uic.edu",
              },
              { label: "ACM", to: "https://www.acm.org" },
              { label: "UIC Computer Science", to: "https://cs.uic.edu" },
              { label: "UIC College of Engineering", to: "https://engineering.uic.edu" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ACM@UIC. Built with Docusaurus.`,
      },
    }),

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "default",
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./src/sidebars/docsSidebar.js"),
          editUrl: `${gitHubRepoUrl}/edit/${gitHubRepoDefaultBranch}/`,
        },
        blog: {
          showReadingTime: true,
          path: "blog",
          blogTitle: "ACM@UIC Announcements",
          blogDescription: "ACM@UIC Announcements and Updates",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All Posts",
          routeBasePath: "blog",
          editUrl: `${gitHubRepoUrl}/edit/${gitHubRepoDefaultBranch}/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "sigs",
        path: "SIGs",
        routeBasePath: "sigs",
        sidebarPath: require.resolve("./src/sidebars/sigsSidebar.js"),
        editUrl: `${gitHubRepoUrl}/edit/${gitHubRepoDefaultBranch}/`,
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      }),
    ],
  ],
};

exports.default = config;
module.exports = config;
