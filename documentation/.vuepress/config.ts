
import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Better-Tools Documentation',
  description: 'Better-Tools - just a bunch of useful functions for everyday life',
  theme: defaultTheme({
    repo: 'https://gitlab.com/BetterCorp/tools',
    docsRepo: 'https://gitlab.com/BetterCorp/tools',
    //docsBranch: 'documentation',
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Tools',
        link: '/Tools',
      },
      {
        text: 'NodeJS',
        link: '/NodeJS',
      },
      {
        text: 'VueJS',
        link: '/VueJS',
      },
      {
        text: 'Interfaces',
        link: '/Interfaces',
      }
    ],
  }),
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'left',
        },
      },
    },
  }),
});