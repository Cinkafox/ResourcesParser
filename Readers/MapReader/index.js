const FileReader = require("../../FileReader")
const ComponentReader = require("../ComponentReader")
const Paths = require("../../Paths")

class MapReader {
    Maps = {}
    constructor(c) {
        const PATH = Paths.MAPS_PATH
        FileReader.readAllFiles(PATH, (Path, type,fileName) => {
            if (type !== "yml") return
            const obj = FileReader.readYAML(Path)
            this.Maps[fileName.split(".")[0]] = {}
            const CR = new ComponentReader(c)
            for (let o of Object.keys(obj.entities)){
                if (c.TYPES.entity.Items[obj.entities[o].type] == undefined) continue
                const ComponentsItem = CR.ComponentReader(c.TYPES.entity.Items[obj.entities[o].type])
                const ComponentsMap = CR.ComponentReader(obj.entities[o])
                
                
                
            }

        })
    }
}

module.exports = MapReader