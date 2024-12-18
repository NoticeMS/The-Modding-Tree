var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: [
        ["click to get limes"],
        ["l"],
    ]

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("click for 1 lime", {
    nodeStyle: {"height": "150px", "width": "150px", "background-position": "center", "background-repeat": "no-repeat", "border-radius": "75px"},
    getLimes() {
        a = new Decimal(1);
        if (hasUpgrade('l', 11)) a = a.times(2);
        if (hasUpgrade('l', 12)) a = a.times(3)
        return a;
    },
    onClick() {
        player.points = player.points.add(this.getLimes())
    },
    canClick() {return true},
    color: "#d8d8d8",
    tooltip() {
        if (this.getLimes().eq(1)) {return "Click to gain " + this.getLimes() + " lime"} else {return "Click to gain " + this.getLimes() + " lime"}
    }
})


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
})
