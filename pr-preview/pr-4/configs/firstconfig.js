export default {
  id: "app",
  stacEndpoint:
    "https://esa-eodashboards.github.io/RACE-catalog/RACE/catalog.json",
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
  templates: {
    expert: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
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
        id: "background-map",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: true,
              enableSearch: false,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32,
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: true,
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded: true,
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded: true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 6,
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      cssVars: {
                        "--layer-toggle-button-visibility": "flex",
                        "--list-padding": "1rem",
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
                  id: "Information",
                  title: "Information",
                  layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 3, w: 4, h: 9 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: "9/9/10", y: 6, w: "3/3/2", h: 6 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 12, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
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
        id: "background-map-compare",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: false,
            btns: {
              enableZoom: true,
              enableExportMap: false,
              enableChangeProjection: false,
              enableCompareIndicators: {
                fallbackTemplate: "expert",
              },
              enableBackToPOIs: false,
              enableSearch: false,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32,
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: true,
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded: true,
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded: true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 6,
                },
              },
            },
          },
        },
        // compare indicators
        {
          id: Symbol(),
          type: "internal",
          title: "Compare Tools",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select second indicator",
              itemFilterConfig: {
                enableCompare: true,
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: true,
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded: true,
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded: true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 6,
                },
                filtersTitle: "Select an indicator to compare",
                resultsTitle: "",
              },
            },
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              cssVars: {
                "--list-padding": "1rem",
              },
            },
          },
        },
        {
          id: Symbol(),
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 11 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
              cssVars: {
                "--list-padding": "1rem",
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 3, w: 4, h: 9 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC) && {
              id: "Process",
              type: "internal",
              title: "Processes",
              layout: { x: 0, y: 6, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
              },
            },
        },
        {
          defineWidget: (_, updatedCompareStac) =>
            window.eodashStore.actions.includesProcess(
              updatedCompareStac,
              true,
            ) && {
              id: "CompareMapProcess",
              type: "internal",
              title: "Processes",
              layout: { x: 9, y: 6, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget(true) && {
              id: "ProcessResultChartCompare",
              type: "internal",
              title: "Compare Chart",
              layout: { x: 6, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
      ],
    },
  },
};
