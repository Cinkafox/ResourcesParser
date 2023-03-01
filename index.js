const fs = require('fs');
const path = require('path');
const YAMLloader = require("./YAMLloader")
const TYPES = require("./Type")

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
        }
    }
    
};

listFiles("Resources")
console.log(TYPES.reaction.Reactions)
