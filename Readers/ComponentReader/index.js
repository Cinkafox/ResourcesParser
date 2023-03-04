const ComponentsClass = require("./Components")()

class ComponentReader {
    Prototype = {}
    constructor(Prototype) {
        this.Prototype = Prototype
    }
    ComponentSelector(ComponentItem,ParentComponents) {

        const LocalComponent = ComponentsClass[ComponentItem.type]
        if (LocalComponent) return new LocalComponent().Read(ComponentItem, ParentComponents)
        return new ComponentsClass.BaseComponent().Read(ComponentItem)
    }
    ComponentReader(item) {
        let components = {}
        if (item == undefined) return components
        const parent = this.Prototype.TYPES.entity.Items[item.parent]
        if (parent) components = this.ComponentReader(this.Prototype.TYPES.entity.Items[item.parent])
        if (item.components)
            for (let o of item.components)
                components[o.type] = this.ComponentSelector(o, components)
        return components
    }
}

module.exports = ComponentReader