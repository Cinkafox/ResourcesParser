const path = require('path');
const FileReader = require("../../FileReader")
const GTYPES = require("./Type")
const Paths = require("../../Paths")
class PrototypeReader{
    TYPES
    constructor(Lang) {
        this.TYPES = GTYPES(Lang.Lang)
        const PATH = Paths.PROTOTYPES_PATH
        FileReader.readAllFiles(PATH, (Path, type) => {
            if (type !== "yml") return
            const obj = FileReader.readYAML(Path)
            if (Array.isArray(obj))
                for (let a of obj) {
                    let type = this.TYPES[a.type]
                    if (type) type.Add_item(a)
                } 
        })
    }
}

module.exports = PrototypeReader