module.exports = {
  title: 'Strapql',
  tagline: 'Strapi GraphQL API documentation',
  url: 'https://strapql.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kevinadhiguna', // Usually your GitHub org/user name.
  projectName: 'strapql', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Strapql',
      logo: {
        alt: 'Strapql Logo',
        src: 'img/strapql.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {href: 'https://about.lovia.life/docs/engineering/graphql/', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/kevinadhiguna/strapi-graphql-documentation',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kevinadhiguna/strapi-graphql-documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Strapql, Inc. Built with ❤️ by kevin.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kevinadhiguna/strapi-graphql-documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kevinadhiguna/strapi-graphql-documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
