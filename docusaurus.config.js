// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Exerra docs",
  tagline: "Documentation for various Exerra's projects",
  url: "https://docs.exerra.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.exerra.xyz/png/pfp.png",
  organizationName: "Exerra", // Usually your GitHub org/user name.
  projectName: "exerra-api-docs", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Exerra/exerra-api-docs/tree/master/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/Exerra/exerra-api-docs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "Exerra docs",
        logo: {
          alt: "Exerra",
          src: "https://cdn.exerra.xyz/png/pfp.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Projects",
          },
          { to: "/api", label: "API", position: "left" },
          //{ to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Exerra/exerra-api-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "More",
            items: [
              {
                label: "Status",
                href: "https://status.exerra.xyz",
              },
              {
                label: "Karen Bot",
                href: "https://karen.exerra.xyz",
              },
              {
                label: "Exerra's website",
                href: "https://exerra.xyz",
              },
              {
                label: "Exerra Shortener",
                href: "https://s.exerra.xyz",
              },
              {
                label: "Exerra's mods",
                href: "https://mods.exerra.xyz",
              },
            ],
          },
          {
            title: "External",
            items: [
              {
                label: "Discord",
                href: "https://guild.exerra.xyz",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Exerra",
              },
              {
                label: "GitHub",
                href: "https://github.com/Exerra",
              },
            ],
          }
        ],
        copyright: `Copyright © whatever year it is rn by Exerra`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
