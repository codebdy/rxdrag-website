
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const tongjiScript = `<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4206943a05936791c2b5a17ff8159517";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>`

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'rxDrag',
  tagline: 'rxDrag 一款开源的低代码开发平台',
  url: 'https://rxdrag.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.png',
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
        {to: '/docs/intro', label: '文档', position: 'left'},
        {to: '/blog', label: '博客', position: 'left'},
        {
          label: '在线演示',
          items: [
            {
              href: 'https://rxmodels-client.rxdrag.com/',
              target: '_blank',
              label: 'rxModels服务',
            },
            {
              href: 'https://dragit.vercel.app/',
              target: '_blank',
              label: 'DragIt 可视化前端',
            },
          ],
        },
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

      copyright: `
        <small>Copyright © ${new Date().getFullYear()} 
        rxDrag. Built with Docusaurus.</small> <br /> 
        <a style="font-size:12px" href="http://beian.miit.gov.cn/" target="_blank" >
          鲁ICP备20004279号-2
        </a> 
        ${tongjiScript}
      `,
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
            'https://github.com/rxdrag/rxdrag-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/rxdrag/rxdrag-website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
