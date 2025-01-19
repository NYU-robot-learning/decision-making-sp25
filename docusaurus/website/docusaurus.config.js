// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Deep Decision Making and Reinforcement Learning',
  tagline: 'Spring 2025',
  url: 'https://nyu-robot-learning.github.io/',
  baseUrl: '/decision-making-sp25/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nyu-robot-learning', // Usually your GitHub org/user name.
  projectName: 'decision-making-sp25', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CSCI-GA 3033-090: Deep Decision Making and Reinforcement Learning',
        logo: {
          alt: 'Site Logo',
          src: 'img/NYU.png',
        },
       
        items: [
          {to: '/logistics', label: 'Logistics', position: 'left'},
          {to: '/syllabus', label: 'Syllabus', position: 'left'},
          {to: '/assignments', label: 'Assignments', position: 'left'},
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Class Notes',
          // },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     // {
      //     //   title: 'Docs',
      //     //   items: [
      //     //     {
      //     //       label: 'Class Notes',
      //     //       to: '/docs/intro',
      //     //     },
      //     //   ],
      //     // },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
