const path = require('path');
const FileReader = require("../../FileReader")
const GTYPES = require("./Type")

class PrototypeReader{
    PATH = "Prototypes"
    TYPES
    constructor(ResPath,Lang) {
        this.TYPES = GTYPES(Lang.Lang)
        this.PATH = path.join(ResPath)
        FileReader.readAllFiles(this.PATH, (Path, type) => {
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