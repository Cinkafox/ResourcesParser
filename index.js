const fs = require('fs');
const path = require('path');
const YAMLloader = require("./YAMLloader")
const LANG = {}
const TYPES = require("./Type")(LANG)

const listFiles = (directoryPath, filesPaths = []) => {
    for (const fileName of fs.readdirSync(directoryPath)) {
        const filePath = path.join(directoryPath, fileName);
        const fileStat = fs.statSync(filePath);
        if (fileStat.isDirectory()) {
            listFiles(filePath, filesPaths);
        } else if (filePath.split(".").at(-1) == "yml") {
            const obj = YAMLloader(filePath)
            if (Array.isArray(obj))
                for (let a of obj) {
                    let type = TYPES[a.type]
                    if (type) type.Add_item(a)
                }
        } else if (filePath.split(".").at(-1) == "ftl"){
            for (let a of fs.readFileSync(filePath, 'utf8').split("\n")){
                const splited = a.split(" = ")
                if (splited[1] !== undefined)
                    LANG[splited[0]] = splited[1].trim()
            }
        }
    }
    
};

listFiles("Resources")
console.log(TYPES.reaction.Reactions)
console.log(TYPES.reagent.Reagents)
//console.log(LANG)
