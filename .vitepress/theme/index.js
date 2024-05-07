// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import '@eodash/eodash/webcomponent.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      const eodash = await import('@eodash/eodash/webcomponent');
      app.use(eodash);
      const jsonform = await import('@eox/jsonform');
      app.use(jsonform);
      const storytelling = await import('@eox/storytelling');
      app.use(storytelling);
    }
  }
}
