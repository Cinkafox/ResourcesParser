class decal {
    LANG
    constructor(LANG) {
        this.LANG = LANG
    }
    Items = {}
    Add_item(item) {
        this.Items[item.id] = this.PathJoin(item.sprite.sprite, item.sprite.state)
    }

    PathJoin(SpritePath, state) {
        return SpritePath + "/" + state + ".png"
    }
}
module.exports = decal