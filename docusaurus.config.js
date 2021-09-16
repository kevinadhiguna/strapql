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
        {href: 'https://about.lovia.life/docs/engineering/graphql/strapi-graphql-documentation/', label: 'Blog', position: 'left'},
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
              label: 'Get Started',
              to: 'docs/',
            },
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2/',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.strapi.io',
            },
            {
              label: 'Strapi Forum',
              href: 'https://forum.strapi.io',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/strapi',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/strapi',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/strapijs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://about.lovia.life/docs/engineering/graphql/strapi-graphql-documentation/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kevinadhiguna/strapi-graphql-documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Strapql, Built with ❤️ by kevin.`,
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
            'https://github.com/kevinadhiguna/strapql',
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
