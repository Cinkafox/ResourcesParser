const reaction = require("./reaction")
const reagent = require("./reagent")
const decal = require("./decal")
const tile = require("./tile")
module.exports = (LANG) =>{
    return {
        reaction: new reaction(LANG),
        reagent: new reagent(LANG),
        decal: new decal(LANG),
        tile: new tile(LANG)
    }
}