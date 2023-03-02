class decal {
    LANG
    constructor(LANG) {
        this.LANG = LANG
    }
    Decals = {}
    Add_item(item) {
        item.name = this.LANG[item.name] ? this.LANG[item.name] : item.name
        item.desc = this.LANG[item.desc] ? this.LANG[item.desc] : item.desc
        item.physicalDesc = this.LANG[item.physicalDesc] ? this.LANG[item.physicalDesc] : item.physicalDesc
        this.Decals[item.id] = item
    }
}
module.exports = decal