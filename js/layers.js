addLayer("l", {
    name: "lime", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D9D9D9",
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        rows: 4,
        cols: 5,
        12: {
            name: "Lime Doubler",
            description: "Double Limes",
            cost: 50,
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        23: {
            name: "Lime Tripler",
            description: "Triple Limes",
            cost: 115,
            unlocked() { return hasUpgrade('l', 12)},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        22: {
            name: "Lime Booster I",
            description: "1.5x Limes",
            cost: 365,
            unlocked() { return hasUpgrade('l', 23)},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        24: {
            name: "Lime Booster II",
            description: "1.75x Limes",
            cost: 550,
            unlocked() { return hasUpgrade('l', 23)},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        33: {
            name: "Lime Synergy I",
            description: "Limes boost themselves: x^1.1(for now, idk the formula)",
            cost: 1000,
            unlocked() { return hasUpgrade('l', 23)},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        32: {
            name: "Lime Booster III",
            description: "3.14x Limes",
            cost: 30000,
            unlocked() { return hasUpgrade('l', 22)},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        34: {
            name: "Lime Booster IV",
            description: "3.5x Limes",
            cost: 100000,
            unlocked() { return hasUpgrade('l', 24)},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        43: {
            name: "Lime Quadrupler",
            description: "Quadruple Limes",
            cost: 7500,
            unlocked() { return hasUpgrade('l', 33)},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
        53: {
            name: "Lime Autoclicker",
            description: "Autoclick on Lime Button every 0.1 Seconds but lose ability to click on it.",
            cost: 350000,
            unlocked() { return hasUpgrade('l', 43)},
            currencyInternalName: "points",
            currencyDisplayName: "limes"
        },
    },
})
