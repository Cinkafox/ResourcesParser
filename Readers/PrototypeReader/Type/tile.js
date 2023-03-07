class decal {
    LANG
    constructor(LANG) {
        this.LANG = LANG
    }
    Items = {}
    Add_item(item) {
        this.Items[item.id] = item.sprite
    }

}
module.exports = decal