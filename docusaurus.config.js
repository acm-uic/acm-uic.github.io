// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { config: appConfig } = require("./appConfig");

/** @type {Partial<import('@docusaurus/types').DocusaurusConfig>} */
const config = {
  title: "ACM@UIC",
  tagline: "Association for Computing Machinery Student Chapter at University of Illinois at Chicago",
  url: "https://acm-uic.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "acm-uic", // Usually your GitHub org/user name.
  projectName: "acm-uic.github.io", // Usually your repo name.
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
        {
          href: appConfig.discordServerLink,
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/acm-uic/acm-uic.github.io",
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
            {
              // label: "Discord",
              html: `
                <a class="footer__link-item" href="${appConfig.discordServerLink}" target="_blank" rel="noreferrer noopener" aria-label="ACM@UIC Discord Server">
                  <img alt="Discord" src="https://img.shields.io/discord/652006495675875359?label=Discord&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2">
                </a>
              `,
            },
            {
              // label: 'Slack',
              html: `
                <a class="footer__link-item" href="${appConfig.slackWorkspaceSignUpLink}" target="_blank" rel="noreferrer noopener" aria-label="ACM@UIC Slack Workspace">
                  <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white">
                </a>
              `,
            },
            {
              // label: 'GitHub',
              html: `
                <a class="footer__link-item" href="https://github.com/acm-uic" target="_blank" rel="noreferrer noopener" aria-label="ACM@UIC GitHub Organization">
                  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-24292e?logo=github&logoColor=white">
                </a>
              `,
            },
          ],
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
          editUrl: "https://github.com/acm-uic/acm-uic.github.io/edit/main/docs",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/acm-uic/acm-uic.github.io/edit/main/blog/",
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
