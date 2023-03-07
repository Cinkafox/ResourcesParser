const reaction = require("./reaction")
const basetype = require("./basetype")
const decal= require("./decal")
const tile = require("./tile")

module.exports = (LANG) =>{
    return {
        reaction: new reaction(LANG),
        reagent: new basetype(LANG),
        decal: new decal(LANG),
        tile: new tile(LANG),
        entity: new basetype(LANG)
    }
}