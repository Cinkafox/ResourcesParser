const path = require('path')
const FileReader = require("../../FileReader")
class MapReader {
    PATH = "TestMap"
    Maps = {}
    constructor(ResPath,c) {
        this.PATH = path.join(ResPath, this.PATH)
        FileReader.readAllFiles(this.PATH, (Path, type,fileName) => {
            if (type !== "yml") return
            const obj = FileReader.readYAML(Path)
            this.Maps[fileName.split(".")[0]] = {}
           
            for (let o of Object.keys(obj.entities)){
                //console.log(Object.keys(obj.entities[o]).join(","))
                if (obj.entities[o].type !== undefined)
                console.log(c[obj.entities[o].type].name + " " + o)
            }

        })
    }
}

module.exports = MapReader