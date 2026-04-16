// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

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
      await import('./style.css');
      await import('@eodash/eodash/webcomponent');
      await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
      await import ("@eox/map");
      await import ("@eox/chart");
      await import ("@eox/map/src/plugins/advancedLayersAndSources");
      await import ("@eox/drawtools");
      await import ("@eox/jsonform");
      await import ("@eox/stacinfo");
      await import ("@eox/layercontrol");
      await import ("color-legend-element");
      await import ("@eox/timecontrol");
      await import ("@eox/ui");
    }
  }
}
