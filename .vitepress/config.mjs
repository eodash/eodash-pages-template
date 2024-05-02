import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "eodash Pages Template",
  description: "This is a template example of how to setup eodash within a VitePress environment",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'UC1 Dashboard', link: '/uc1dashboard/' },
      { text: 'UC2 Dashboard', link: '/uc2dashboard/' },
      { text: 'Stories', link: '/stories/' },
      { text: 'Editor', link: '/editor/' }
    ],
  }
})
