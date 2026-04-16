export default {
  id: "app2",
  stacEndpoint: "https://esa-eodashboards.github.io/eodashboard-catalog/trilateral/catalog.json",
  brand: {
        noLayout:true,
        name: 'runtime config 2',
        font: { family: "Noto Sans" },
        theme: {
            colors: {
                primary: "#AE9537",
                surface: "#f2f4f3",
                secondary: "#AE9537"
            }
        }
    },
  templates: {
    light: {
      gap: 16,
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
                    color: "#a34b20"
                }
            }
        },
      background: {
        id: "background-map-light",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: false,
            zoomToExtent: true,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: false,
              enableSearch: false,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32
            },
          },
        },
      },
      widgets: [
        {
          id: "Tools",
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "expert",
              layoutIcon:
                "M2,5V19H8V5H2M9,5V10H15V5H9M16,5V14H22V5H16M9,11V19H15V11H9M16,15V19H22V15H16Z",
              itemFilterConfig: {
                enableHighlighting: false,
                aggregateResults: "collection_group",
                resultType: "cards",
                filtersTitle: "",
                filterProperties: [],
                resultsTitle: "Explore more indicators",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                cssVars: {
                  "--filter-display": "none",
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Layers",
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: "3/3/2", h: 10 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      slider: false,
                      tools: ["info", "legend"],
                      cssVars: {
                        "--list-padding": "-8px",
                        "--tools-button-visibility": "none",
                        "--layer-input-visibility": "none",
                        "--layer-type-visibility": "none",
                        "--padding": "8px",
                        "--padding-vertical": "16px",
                        "--layer-tools-button-visibility": "none",
                        "--layer-summary-visibility": "none",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "StacInfo",
                  type: "internal",
                  title: "Information",
                  layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 11 },
                  widget: {
                    name: "EodashStacInfo",
                    properties: {
                      tags: [],
                      header: [],
                      footer: [],
                      body: ["description"],
                      styleOverride: "",
                      featured: [],
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "DatePicker",
                  type: "internal",
                  layout: { x: 4, y: 3, w: 4, h: 9 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
  },
};
