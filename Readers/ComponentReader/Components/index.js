const SpriteComponent = require("./SpriteComponent")
const BaseComponent = require("./BaseComponent")
module.exports = () =>{
    return {
        Sprite: SpriteComponent,
        BaseComponent: BaseComponent
    }
}