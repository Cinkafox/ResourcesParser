const ComponentsClass = require("./Components")()

class ComponentReader {
    Prototype = {}
    constructor(Prototype) {
        this.Prototype = Prototype
    }
    ComponentSelector(ComponentItem) {

        const LocalComponent = ComponentsClass[ComponentItem.type]
        if (LocalComponent) return new LocalComponent().Read(ComponentItem)
        return new ComponentsClass.BaseComponent().Read(ComponentItem)
    }
    ComponentReader(item) {
        let components = {}
        if (item == undefined) return components
        if (item.parent) components = this.ComponentReader(this.Prototype.TYPES.entity.Items[item.parent])
        if (item.components)
            for (let o of item.components)
                components[o.type] = this.ComponentSelector(o)
        return components
    }
}

module.exports = ComponentReader