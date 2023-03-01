const fs = require('fs/promises');
const fss = require('fs');
const path = require('path');
const yaml = require('js-yaml');

let pathtoresources = "Resources"

let schema = []
const tryToRead = (filePath)=>{
    try {
        yaml.load(fss.readFileSync(filePath, 'utf8'), { schema: new yaml.Schema(schema) })
    } catch (e) {

        if (e.name !== "YAMLException") {
            console.log(e)
            return
        }

        let type = e.message.split(" ")[2].slice(3, -1)

        //console.log(type)
        console.log("\t new yaml.Type('!" + type + "',{ kind:'mapping', construct: function(data){ return {" + type.split(":")[0] + ":'"+type.split(":")[1]  + "',...data} } } ) ,")
        if (type == "type:Bool") console.log(filePath)

        schema.push(new yaml.Type("!"+type, { kind: 'mapping'}))
        tryToRead(filePath)
    }
}

const getFilesFromDirectory = async (directoryPath) => {
    const filesInDirectory = await fs.readdir(directoryPath);
    await Promise.all(
        filesInDirectory.map(async (file) => {
            const filePath = path.join(directoryPath, file);
            const stats = await fs.stat(filePath);
            
            if (stats.isDirectory()) {
                getFilesFromDirectory(filePath);
            } else if(filePath.split(".").at(-1) == "yml"){
                //console.log(filePath)
                tryToRead(filePath)
            }
        })
    );
   
};



getFilesFromDirectory(pathtoresources)

