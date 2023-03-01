class reagent{
    LANG
    constructor(LANG){
        this.LANG = LANG
    }
    Reagents = {}
    Add_item(item) {
        item.name = this.LANG[item.name] ? this.LANG[item.name] : item.name
        item.desc = this.LANG[item.desc] ? this.LANG[item.desc] : item.desc
        item.physicalDesc = this.LANG[item.physicalDesc] ? this.LANG[item.physicalDesc] : item.physicalDesc
        this.Reagents[item.id] = item
    }
}
module.exports = reagent