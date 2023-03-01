const fs = require('fs');
const path = require('path');
const YAMLloader = require("./YAMLloader")
const TYPES = require("./Type")

let PATH = "Resources/Prototypes/Recipes/Reactions/"


fs.readdir(PATH, (error, fileNames) => {
    if (error) throw error;

    fileNames.forEach(filename => {
        console.log(filename)
        const obj = YAMLloader(PATH + filename)
        if(Array.isArray(obj))
            for(let a of obj){
                let type = TYPES[a.type]
                if(type) type.Add_item(a)            }
    })
})