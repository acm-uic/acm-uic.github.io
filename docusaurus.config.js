/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "ACM@UIC",
  tagline:
    "Association for Computing Machinery Student Chapter at University of Illinois at Chicago",
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
      title: "ACM@UIC",
      logo: {
        alt: "ACM@UIC Logo",
        src: "img/logo.png",
      },
      items: [
        {
          label: "About",
          position: "left",
          href: "/about",
        },
        {
          to: "/sigs/Overview",
          position: "left",
          label: "SIGs",
        },
        {
          type: "doc",
          position: "left",
          docId: "introduction",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
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
          ],
        },
        {
          title: "Community",
          items: [
            {
              // label: "Discord",
              html: `
                <a class="footer__link-item" href="https://discord.gg/Afy6gf4" target="_blank" rel="noreferrer noopener" aria-label="ACM@UIC Discord Server">
                  <img alt="Discord" src="https://img.shields.io/discord/652006495675875359?label=Discord&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2">
                </a>
              `,
            },
            {
              // label: 'Slack',
              html: `
                <a class="footer__link-item" href="https://uicacm.slack.com/signup" target="_blank" rel="noreferrer noopener" aria-label="ACM@UIC Slack Workspace">
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ACM@UIC. Built with Docusaurus.`,
    },
    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        "We are revamping our docs and website. This website is very much a work in progress.",
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/acm-uic/acm-uic.github.io/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/acm-uic/acm-uic.github.io/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sigs',
        path: 'SIGs',
        routeBasePath: 'sigs',
        sidebarPath: require.resolve('./sigsidebars.js'),
        // ... other options
      },
    ],
  ],
};
