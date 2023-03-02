const reaction = require("./reaction")
const reagent = require("./reagent")
module.exports = (LANG) =>{
    return {
        reaction: new reaction(LANG),
        reagent: new reagent(LANG)
    }
}