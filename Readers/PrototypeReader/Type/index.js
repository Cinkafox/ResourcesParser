const reaction = require("./reaction")
const basetype = require("./basetype")

module.exports = (LANG) =>{
    return {
        reaction: new reaction(LANG),
        reagent: new basetype(LANG),
        decal: new basetype(LANG),
        tile: new basetype(LANG),
        entity: new basetype(LANG)
    }
}