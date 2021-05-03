/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ACM@UIC',
  tagline: 'Association for Computing Machinery Student Chapter at University of Illinois at Chicago',
  url: 'https://acm-uic.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'acm-uic', // Usually your GitHub org/user name.
  projectName: 'acm-uic.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ACM@UIC',
      logo: {
        alt: 'ACM@UIC Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/acm-uic/acm-uic.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Slack',
              href: 'https://uicacm.slack.com/signup',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/acm-uic',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ACM@UIC. Built with Docusaurus.`,
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'We are revamping our docs and website. This website is very much a work in progress.',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/acm-uic/acm-uic.github.io/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/acm-uic/acm-uic.github.io/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
