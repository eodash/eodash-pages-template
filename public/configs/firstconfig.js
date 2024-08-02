export default {
  id: "app",
  stacEndpoint:
    "https://eodashcatalog.eox.at/test-style/trilateral/catalog.json",
  brand: {
    noLayout: true,
    name: "runtime config 1",
    font: { family: "Roboto" },
    theme: {
      colors: {
        primary: "#AE9537",
        surface: "#f2f4f3",
        secondary: "#AE9537",
      },
    },
  },
  template: {
    loading: {
      id: Symbol(),
      type: "web-component",
      widget: {
        link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
        tagName: "l-mirage",
        properties: {
          class: "align-self-center justify-self-center",
          size: "120",
          speed: "2.5",
          color: "#004170",
        },
      },
    },
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: "EodashMap",
        properties: {
          enableCompare: true,
        },
      },
    },
    widgets: [
      {
        layout: { x: 0, y: 0, w: 3, h: 12 },
        title: "Tools",
        id: Symbol(),
        type: "internal",
        widget: {
          name: "EodashItemFilter",
        },
        properties: {
          enableCompare: true,
          aggregateResults: "themes",
        },
      },
      {
        id: "Information",
        title: "Information",
        layout: { x: 9, y: 0, w: 3, h: 12 },
        type: "web-component",
        widget: {
          link: "https://cdn.jsdelivr.net/npm/@eox/stacinfo",
          properties: {
            for: window.eodashStore.states.currentUrl,
            allowHtml: "true",
            header: '["title"]',
            tags: '["themes"]',
            subheader: "[]",
            properties: '["satellite","sensor","agency","extent"]',
            featured: '["description","providers","assets","links"]',
            footer: '["sci:citation"]',
          },
          tagName: "eox-stacinfo",
        },
      },
    ],
  },
};
