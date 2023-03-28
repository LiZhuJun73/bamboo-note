const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "Bamboo Note",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://LiZhuJun73.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/bamboo-note/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LiZhuJun73", // Usually your GitHub org/user name.
  projectName: "bamboo-note", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: "最新文章",
          blogSidebarCount: 15,
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
        id: "nihongo",
        path: "docs-n",
        routeBasePath: "docs-n",
        sidebarPath: require.resolve("./sidebarsNihongo.js"),
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Bamboo Note",
      logo: {
        alt: "Bamboo Note Logo",
        src: "img/logo1.svg",
        srcDark: "img/logo2.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "技術筆記",
        },
        {
          to: "/docs-n/nihongo",
          position: "left",
          label: "日語筆記",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/LiZhuJun73",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © Bamboo Note`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
module.exports = config;
