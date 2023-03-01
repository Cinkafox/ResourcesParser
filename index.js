const fs = require('fs/promises');
const path = require('path');
const YAMLloader = require("./YAMLloader")
const TYPES = require("./Type")

let PATH = "Resources/Prototypes/Recipes/Reactions/"

const getYAMLFromDirectory = async (directoryPath) => {
    const filesInDirectory = await fs.readdir(directoryPath);
    await Promise.all(
        filesInDirectory.map(async (file) => {
            const filePath = path.join(directoryPath, file);
            const stats = await fs.stat(filePath);

            if (stats.isDirectory()) {
                getYAMLFromDirectory(filePath);
            } else if (filePath.split(".").at(-1) == "yml") {
                //console.log(filePath)
                const obj = YAMLloader(filePath)
                if (Array.isArray(obj))
                    for (let a of obj) {
                        let type = TYPES[a.type]
                        if (type) type.Add_item(a)
                    }
                
            }
        })
    );

};

getYAMLFromDirectory("Resources")
