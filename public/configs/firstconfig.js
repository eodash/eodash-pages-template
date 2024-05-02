export default {
    id: 'app',
    stacEndpoint: "https://esa-eodash.github.io/RACE-catalog/RACE/catalog.json",
    brand: {
        noLayout:true,
        name: 'runtime config 1',
        font: { family: "Roboto" },
        theme: {
            colors: {
                primary: "#AE9537",
                surface: "#f2f4f3",
                secondary: "#AE9537"
            }
        }
    },
    template: {
        background: {
            id: Symbol(),
            type: "internal",
            widget: {
                name: "EodashMap"
            }
        },
        widgets: [
            {
                layout: { x: 0, y: 0, w: 3, h: 12 },
                title: "Tools",
                id: Symbol(),
                type: "internal",
                widget: {
                    name: "EodashItemFilter"
                }
            }
        ]
    }
}