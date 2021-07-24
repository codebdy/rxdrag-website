const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'rxDrag',
  tagline: 'rxDrag 一款开源的低代码开发平台',
  url: 'https://rxdrag.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'rxDrag.',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/rx-models', label: '上手指南', position: 'left'},
        {
          activeBasePath: 'docs',
          label: '生态圈',
          items: [
            {
              to: 'docs/development-guide/introduction',
              activeBasePath: 'docs/development-guide',
              label: 'rxModels 服务端',
            },
            {
              to: 'docs/vuetify2-tricks/introduction',
              activeBasePath: 'docs/vuetify2-tricks',
              label: 'rxModels 客户端',
            },
            {
              to: 'docs/vuetify2-tricks/introduction',
              activeBasePath: 'docs/vuetify2-tricks',
              label: 'DragIt 可视化前端',
            },
          ],
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/rxdrag/',
          position: 'right',
          src:'img/github.svg',
          label:'Github'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [

      ],

      copyright: `<small>Copyright © ${new Date().getFullYear()} rxDrag. Built with Docusaurus.</small> <br /> <a style="font-size:12px" href="http://beian.miit.gov.cn/" target="_blank" >鲁ICP备20004279号-2</a> `,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
